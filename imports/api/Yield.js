import {Meteor} from 'meteor/meteor';
import {HTTP} from 'meteor/http';

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
        return callService('GET', 'https://api.yelp.com/v3/businesses/search', options).then((result) => result).catch((error) => {
            if (error.response) {
                let errRespData = error.response.data.error;
                throw new Meteor.Error(error.response.statusCode, errRespData.code, errRespData.description);
                return;
            }
            throw error;
        });
    }
});