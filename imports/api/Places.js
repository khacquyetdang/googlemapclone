import {Meteor} from 'meteor/meteor';
import {User} from './User';
export const Places = new Mongo.Collection('places');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor
        .publish('placesByUserId', function tasksPublication() {
            if (this.userId) 
                return Places.find({
                    userIds: {
                        $eq: this.userId
                    }
                });
            }
        );
}

Meteor.methods({
    goToPlace(newPlace) {
        // Make sure the user is logged in before inserting a task
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }
        if (!newPlace) {
            throw new Meteor.Error('placenotdefined', 'Place is not defined');
        }
        const place = Places.findOne({"idPlace": newPlace.id});
        //console.log("place ", place);
        if (!place) {
            Places
                .insert({
                    idPlace: newPlace.id,
                    place: newPlace,
                    userIds: [this.userId]
                }, function (err, records) {
                    if (err) {
                        throw new Meteor.Error('insertError', 'Could not insert the document');
                    }
                });
        } else {
            if (!place.userIds.includes(this.userId)) {
                //console.log("not include push we go");
                Places.update({
                    idPlace: newPlace.id
                }, {
                    $push: {
                        userIds: this.userId
                    }
                });
            } else {
                console.log(" include push we don't go anymore");

                Places.update({
                    idPlace: newPlace.id
                }, {
                    $pull: {
                        userIds: this.userId
                    }
                });

            }
        }
    }
});