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
            consumerKey: "218334098902603",
            secret: "4b9fc8004cbfdfc1c6b76234d183e3c1"
        }
    });
ServiceConfiguration
    .configurations
    .upsert({
        service: "twitter"
    }, {
        $set: {
            consumerKey: "i3kExjBaYwIhBTPbuvcc2APMx",
            secret: "kU55cvth3p1wXxZPpBc4okfXMZHLDTCSXFAIZBRhAImbgn22m2"
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
