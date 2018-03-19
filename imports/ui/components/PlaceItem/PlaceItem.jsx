import React, {Component} from 'react';
import ReactStars from 'react-stars';
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
            <div className="place-container">
                <div className="card horizontal darken-1">
                    <div className="card-stacked">
                        <div className="card-content">
                            <p className="placeTitle">{this.props.businesse.name}</p>
                            <div className="placeRating">
                                <span
                                    className="inline"
                                    style={{
                                    color: "#f9a825"
                                }}>
                                    {this.props.businesse.rating + " "}
                                </span>
                                <ReactStars
                                    className="inline"
                                    color2={"#f9a825"}
                                    count={5}
                                    value={this.props.businesse.rating}
                                    edit={false}/>
                                <span className="reviewCount">
                                    {" (" + this.props.businesse.review_count + ")"}
                                </span>
                            </div>
                            <p className="placeDetail">
                                {this.props.businesse.categories[0].title}
                                <span>{adresse}
                                </span>
                            </p>
                        </div>
                        <div className="card-action">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Go
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>

                    <div className="card-image">
                        <img
                            className="responsive-img img-detail"
                            src={this.props.businesse.image_url}/>
                    </div>
                </div>
            </div>
        );
    }
}