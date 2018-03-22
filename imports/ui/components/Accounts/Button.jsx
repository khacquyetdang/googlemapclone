import React from 'react';
import PropTypes from 'prop-types';
import {Accounts, STATES} from 'meteor/std:accounts-ui';

let Link;
try {
    Link = require('react-router').Link;
} catch (e) {}

export default class Button extends Accounts.ui.Button {
    render() {
        let className = "waves-effect waves-light"
        const {
            label,
            href = null,
            type,
            disabled = false,
            socialId,
            //            className,
            onClick
        } = this.props;
        if (type == 'link') {
            // Support React Router.
            if (Link && href) {
                return <Link to={href} className={className}>{label}</Link>;
            } else {
                return <a href={href} className={className} onClick={onClick}>{label}</a>;
            }
        }
        if (socialId) {
            return <button
                className={className + " btn social " + socialId}
                type={type}
                disabled={disabled}
                onClick={onClick}>
                <i className={"fa fa-" + socialId}/> {label}
            </button>;
        }
        return <button
            className={className + " btn"}
            type={type}
            disabled={disabled}
            onClick={onClick}>{label}</button>;
    }
}

Button.propTypes = {
    onClick: PropTypes.func
};

Accounts.ui.Button = Button;