import {Meteor} from 'meteor/meteor';
import {HTTP} from 'meteor/http';

const callService = (type, url, options) => new Promise((resolve, reject) => {
    HTTP.call(type, url, options, (error, result) => {
        if (error) {
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
        console.log("options : ", options);
        return callService('GET', 'https://api.yelp.com/v3/businesses/search', options).then((result) => result).catch((error) => {
            throw new Meteor.Error('500', `${error.message}`);
        });
    }
});