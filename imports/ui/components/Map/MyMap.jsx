import React from "react";
import ReactDOM from "react-dom";
import {compose, withProps} from "recompose";
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";

const MyMap = compose(withProps({
  /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=" + Meteor.settings.public.googlemapapi.key + "&v=3.exp&libraries=geometry,drawing,places",
  loadingElement: <div style={{
    height: `100%`
  }}/>,
  containerElement: <div style={{
    height: `85vh`
  }}/>,
  mapElement: <div style={{
      height: `100%`
    }}/>
}), withScriptjs, withGoogleMap)(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{
    lng: props.lng,
    lat: props.lat
  }}>
    {props.isMarkerShown && props.placesData && (props.placesData.map(place => <Marker position={{
      lat: place.coordinates.latitude,
      lng: place.coordinates.longitude
    }}/>))}
  </GoogleMap>
));

export default MyMap;