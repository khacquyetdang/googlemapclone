import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss';

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <div className="input-field col s6">
                    <input placeholder="Placeholder" id="first_name" type="text" class="validate"/>
                    <label for="first_name">First Name</label>
                </div>
            </div>
        );
    }
}