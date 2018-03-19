import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './SearchBar.scss';

export default class SearchBar extends Component {
    render() {
        return (
            <div className="card searchbox">
                <input
                    id="searchInput"
                    type="text"
                    placeholder="Enter your destination"
                    onKeyPress={this.props.onKeyPress}></input>
                <i className="material-icons">search</i>
            </div>
        );
    }
}