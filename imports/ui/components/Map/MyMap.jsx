import React, {Component} from "react";
import ReactDOM from "react-dom";
import {compose, withProps} from "recompose";
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker/index.jsx';
class MyMap extends Component {

  render() {
    let businesses = this.props.placesData
      ? this.props.placesData.businesses
      : null;

    console.log("map center lng: ", this.props.lng, "lat: ", this.props.lat);
    return (
      <GoogleMapReact
        bootstrapURLKeys={{
        key: Meteor.settings.public.googlemapapi.key
      }}
        defaultZoom={12}
        center={{
        lng: this.props.lng,
        lat: this.props.lat
      }}>
        {this.props.isMarkerShown && businesses
          ? businesses.map(businesse => <Marker
            key={businesse.id}
            businesse={businesse}
            businesseIdActive={this.props.businesseIdActive}
            lat={businesse.coordinates.latitude}
            lng={businesse.coordinates.longitude}/>)
          : null}
      </GoogleMapReact>
    );
  }
}

export default MyMap;