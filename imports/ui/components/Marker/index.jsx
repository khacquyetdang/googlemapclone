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
        let itemActive = this.props.businesseIdActive && this.props.businesse.id === this.props.businesseIdActive
            ? "itemActive"
            : "itemInActive";
        console.log("active id", this.props.businesseIdActive, " itemActive ", itemActive);
        return (
            <div
                className={`waves-effect waves-circle ${itemActive}`}>
                <div className="circle">
                    <strong>{businesseName}</strong>
                </div>
            </div>
        );
    }
}