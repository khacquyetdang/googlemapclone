import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Input, Icon, Row, Col, Autocomplete} from 'react-materialize';
import './SearchBar.scss';

export default class SearchBar extends Component {
    constructor()
    {
        super();
        this.state = {
            term: null
        }
    }

    onLocationKeyPress = (event) => {
        //event.preventDefault();
        event.which = event.which || event.keyCode;
        if (event.which === 13) {
            this
                .props
                .onSearchEnterKey(event.target.value, this.state.term);
        }
    }
    render() {
        return (
            <div className="card searchbox">
                <Row>
                    <Col s={12}>
                        <Input
                            s={12}
                            onChange={(e, value) => this.setState({term: value})}
                            label='What are you looking for (type Restaurant, Bar...) ?'/>
                    </Col>
                </Row>

                <Row>
                    <Col s={12}>
                        <Input
                        s={12}
                            id="searchInput"
                            type="text"
                            placeholder="Enter your destination"
                            className="validate"
                            onKeyPress={this.onLocationKeyPress}></Input>
                        {this.props.error && <div className="helper-text error" data-error="wrong">{this.props.error}</div>
}
                    </Col>
                </Row>
            </div>
        );
    }
}