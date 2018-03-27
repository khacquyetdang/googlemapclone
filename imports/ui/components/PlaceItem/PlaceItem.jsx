import React, {Component} from 'react';
import ReactStars from 'react-stars';
import './PlaceItem.scss';
import {User} from '../../../api/User';
import {Button, Icon} from 'react-materialize';

export default class PlaceItem extends Component {
    goClick = (event) => {
        event.preventDefault();
        this
            .props
            .onPlaceContainerClick(this.props.businesse.url);
    }
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

        let peopleGoingToThisPlace;
        let userIds = this.props.businesse.userIds;
        let isGoing = false;
        if (userIds && userIds.length > 0) {
            if (userIds.includes(User.id())) {
                if (userIds.length === 1) {
                    peopleGoingToThisPlace = "You want to go this place";
                } else {
                    peopleGoingToThisPlace = `You and ${userIds.length - 1} other(s) person(s) want to go this place`;
                }
                isGoing = true;
            } else {
                peopleGoingToThisPlace = `${userIds.length} person(s) want to go this place`;

            }
        }
        let categorieTitle = this.props.businesse.categories.length >= 1 ? this.props.businesse.categories[0].title : null;
        return (
            <div
                onClick={this.goClick}
                onMouseEnter={() => this.props.onItemHover(this.props.businesse.id)}
                className="place-container">
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
                                {categorieTitle}
                                <span>{adresse}
                                </span>
                            </p>
                        </div>
                        <div className="card-action">
                            <Button
                                onClick={() => this.props.onPlaceClick(this.props.businesse, isGoing)}
                                waves="light">{isGoing
                                    ? "Don't go"
                                    : "Go"}
                                <Icon right>send</Icon>
                            </Button>
                            {peopleGoingToThisPlace && <div className="people">{peopleGoingToThisPlace}</div>}
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