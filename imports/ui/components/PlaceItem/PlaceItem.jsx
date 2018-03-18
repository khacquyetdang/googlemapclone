import React, {Component} from 'react';
import './PlaceItem.scss';

export default class PlaceItem extends Component {
    render() {

        let adresse = this
            .props
            .businesse
            .location
            .display_address
            .reduce((accu, current) => {
                accu = accu + " " + current;
                return accu;
            }, "");
        return (
            <div className="row">
                <div className="card horizontal darken-1">
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>{this.props.businesse.name}</p>
                            <br/>
                            <p>
                                {this.props.businesse.categories.title}
                                <span>{adresse}
                                </span>
                            </p>
                        </div>
                        <div className="card-action">Go</div>
                    </div>

                    <div className="card-image">
                        <img className="responsive-img" src={this.props.businesse.image_url}/>
                    </div>
                </div>
            </div>
        );
    }
}