import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Input, Icon} from 'react-materialize';
import './SearchBar.scss';

export default class SearchBar extends Component {
    render() {
        return (
            <div className="card searchbox">
                <input
                    id="searchInput"
                    type="text"
                    placeholder="Enter your destination"
                    className="validate"
                    onKeyPress={this.props.onKeyPress}></input>
                <i className="material-icons">search</i>
                {this.props.error && <div className="helper-text error" data-error="wrong">{this.props.error}</div>
}
            </div>
        );
    }
}