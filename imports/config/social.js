import {ServiceConfiguration} from 'meteor/service-configuration';
import {Accounts} from 'meteor/std:accounts-ui';
// import './Accounts/Button'; Accounts.config({sendVerificationEmail: false,
// forbidClientAccountCreation: false});

ServiceConfiguration
    .configurations
    .upsert({
        service: "facebook"
    }, {
        $set: {
            consumerKey: Meteor.settings.facebook.consumerKey,
            secret: Meteor.settings.facebook.secret
        }
    });
ServiceConfiguration
    .configurations
    .upsert({
        service: "twitter"
    }, {
        $set: {
            consumerKey: Meteor.settings.twitter.consumerKey,
            secret: Meteor.settings.twitter.secret
        }
    });

Accounts.config({forbidClientAccountCreation: false});

Accounts
    .ui
    .config({passwordSignupFields: 'USERNAME_AND_EMAIL', minimumPasswordLength: 6})

/*
AccountsTemplates.configure({showForgotPasswordLink: true, showLabels: true, showPlaceholders: true, enablePasswordChange: true});

AccountsTemplates.configure({forbidClientAccountCreation: false, overrideLoginErrors: false, negativeValidation: true, positiveValidation: true, showValidating: true});
//AccountsTemplates.configure({forbidClientAccountCreation: false});
AccountsTemplates.configureRoute('resetPwd', {
    name: 'resetPwd',
    path: '/reset-password'
});*/
