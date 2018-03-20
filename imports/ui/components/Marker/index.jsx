import React, {Component} from 'react';
import './styles.scss';
export default class Marker extends Component {

    render() {
        // <i className="material-icons center-align icon-marker">restaurant</i> <img
        // className="circle responsive-img" src={this.props.businesse.image_url}/>
        let businesseName = this
            .props
            .businesse
            .name
            .split(" ")
            .reduce((accu, current) => accu + current.charAt(0), "")
            .toUpperCase();
        return (
            <div className="waves-effect waves-circle waves-light btn-floating">
                <strong>{businesseName}</strong>
            </div>
        );
    }
}