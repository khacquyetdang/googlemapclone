import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip'
import './styles.scss';
export default class Marker extends Component {

    openInNewTab(url) {
        //console.log("openInNewTab url ", url);
        let win = window.open(url, '_blank');
        //win.focus();
    }
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
            ? "itemActive pulse"
            : "itemInActive";
        return (
            <div>
                <div
                    className={`waves-effect waves-circle ${itemActive}`}
                    onClick={() => this.props.onPlaceContainerClick(this.props.businesse.url)}>
                    <div data-tip data-for={this.props.businesse.id} className="circle">
                        <strong>{businesseName}</strong>
                    </div>
                </div>
                <ReactTooltip type="info" id={this.props.businesse.id}>
                    <span>{this.props.businesse.name}</span>
                </ReactTooltip>

            </div>
        );
    }
}