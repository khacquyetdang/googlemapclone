import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Input, Icon, Row, Col, Autocomplete} from 'react-materialize';
import './SearchBar.scss';

export default class SearchBar extends Component {
    constructor()
    {
        super();
        this.state = {
            term: null,
            location: null
        }
    }
    onSearch = () => {
        if (this.state.term && this.state.location) {
            this
                .props
                .onSearchEnterKey(this.state.location, this.state.term);
        }
    }
    onTermKeyPress = (event) => {
        event.which = event.which || event.keyCode;
        if (event.which === 13) {
            this.onSearch();
        }
    }
    onLocationKeyPress = (event) => {
        //event.preventDefault();
        event.which = event.which || event.keyCode;
        if (event.which === 13) {
            this.onSearch();
        }
    }
    render() {
        return (
            <div className="card searchbox">
                <Row>
                    <Col s={12}>
                        <Input
                            s={12}
                            onKeyPress={this.onTermKeyPress}
                            onChange={(e, value) => this.setState({term: value})}
                            label='What are you looking for (type Restaurant, Bar...) ?'/>
                    </Col>
                </Row>

                <Row>
                    <Col s={12}>
                        <Input
                            s={12}
                            type="text"
                            label="Enter your destination"
                            onChange={(e, value) => this.setState({location: value})}
                            onKeyPress={this.onLocationKeyPress}></Input>
                        {this.props.error && <div className="helper-text error" data-error="wrong">{this.props.error}</div>
}
                    </Col>
                </Row>
            </div>
        );
    }
}