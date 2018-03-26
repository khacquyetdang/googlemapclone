import {Meteor} from 'meteor/meteor';
import {HTTP} from 'meteor/http';
import {Places} from './Places';

const callService = (type, url, options) => new Promise((resolve, reject) => {
    HTTP.call(type, url, options, (error, result) => {
        if (error) {
            console.log("call service error:", error);
            reject(error);
        } else {
            resolve(result);
        }
    });
});

Meteor.methods({
    getPlaces(options) {
        options.headers = {
            "Authorization": "Bearer " + Meteor.settings.yieldapi.apikey
        }
        return callService('GET', 'https://api.yelp.com/v3/businesses/search', options).then((result) => {
            let placesIds = result
                .data
                .businesses
                .map(businesse => businesse.id);
            let peoplesByPlace = [];
            let peoplesGoToPlace = Places.find({
                idPlace: {
                    $in: placesIds
                }
            }, {
                    fields: {
                        "idPlace": true,
                        "userIds": true
                    }
                })
                .fetch()
                .forEach(placeUser => {
                    peoplesByPlace[placeUser.idPlace] = placeUser.userIds;
                });

            result.data.businesses = result
                .data
                .businesses
                .map(businesse => {
                    businesse.userIds = peoplesByPlace[businesse.id];
                    return businesse;
                });
            return result;
        }).catch((error) => {
            if (error.response) {
                let errRespData = error.response.data.error;
                throw new Meteor.Error(error.response.statusCode, errRespData.code, errRespData.description);
                return;
            }
            throw error;
        });
    }
});