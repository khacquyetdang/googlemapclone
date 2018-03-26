import React, {Component} from 'react';
import ReactStars from 'react-stars';
import './MyPlaceItem.scss';
import {User} from '../../../api/User';
import {Button, Icon} from 'react-materialize';

export default class MyPlaceItem extends Component {
    render() {

        let adresse = this
            .props
            .businesse
            .place
            .location
            .display_address
            .reduce((accu, current) => {
                accu = accu + " " + current;
                return accu;
            }, "");
        
        let peopleGoingToThisPlace;
        let userIds = this.props.businesse.userIds;
        if (userIds)
        {
            if (userIds.includes(User.id()))
            {
                if (userIds.length === 1)
                {
                    peopleGoingToThisPlace = "You want to go this place";
                } else {
                    peopleGoingToThisPlace = `You and ${userIds.length - 1} other(s) person(s) want to go this place`;                    
                }
            } else {
                peopleGoingToThisPlace = `${userIds.length} person(s) want to go this place`;                    
                
            }
        }
        return (
            <div className="place-container">
                <div className="card horizontal darken-1">
                    <div className="card-stacked">
                        <div className="card-content">
                            <p className="placeTitle">{this.props.businesse.place.name}</p>
                            <div className="placeRating">
                                <span
                                    className="inline"
                                    style={{
                                    color: "#f9a825"
                                }}>
                                    {this.props.businesse.place.rating + " "}
                                </span>
                                <ReactStars
                                    className="inline"
                                    color2={"#f9a825"}
                                    count={5}
                                    value={this.props.businesse.place.rating}
                                    edit={false}/>
                                <span className="reviewCount">
                                    {" (" + this.props.businesse.place.review_count + ")"}
                                </span>
                            </div>
                            <p className="placeDetail">
                                {this.props.businesse.place.categories[0].title}
                                <span>{adresse}
                                </span>
                            </p>
                        </div>
                        <div className="card-action">
                            { peopleGoingToThisPlace && <div className="people">{peopleGoingToThisPlace}</div> }
                        </div>
                    </div>

                    <div className="card-image">
                        <img
                            className="responsive-img img-detail"
                            src={this.props.businesse.place.image_url}/>
                    </div>
                </div>
            </div>
        );
    }
}