import React, {Component} from 'react';
import classNames from 'classnames';
import PlaceList from '../components/PlaceList/PlaceList';
import SearchBar from '../components/SearchBar/SearchBar.jsx';
import Sidebar from 'react-sidebar';
import {SideNav, Button} from 'react-materialize';
import MyMap from '../components/Map/MyMap.jsx';
import {User} from '../../api/User';
import './Home.scss';
export default class Home extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      place: null,
      placesData: null,
      loading: false,
      offset: 1,
      limitSearch: 20, // normally pass by props
      sidebarOpen: true,
      error: null,
      lng: 2.3421478271,
      lat: 48.8619586068
    };
    this.onSetSidebarOpen = this
      .onSetSidebarOpen
      .bind(this);
    this.handlerSearchKeyPress = this
      .handlerSearchKeyPress
      .bind(this);
    this.search = this
      .search
      .bind(this);
    this.renderOffSetBar = this
      .renderOffSetBar
      .bind(this);
    this.nextOffSet = this
      .nextOffSet
      .bind(this);
    this.previousOffSet = this
      .previousOffSet
      .bind(this);
    this
      .goToPlaceButtonClick
      .bind(this);
  }
  componentDidMount() {
    this.search("Paris", 1);
  }

  search(place, offset) {
    console.log("search place:", place);
    this.setState({loading: true});
    let options = {
      params: {
        "location": place,
        "offset": offset,
        "limit": this.state.limitSearch
      }
    };
    this.setState({place: place})
    Meteor.call('getPlaces', options, (err, res) => {
      if (err) {
        var error = JSON.stringify(err, null, 3);

        error = JSON.parse(error);
        this.setState({error: error});
        console.log(JSON.stringify(err, null, 3));
      } else {
        console.log(res, "success!");
        if (res.statusCode === 200) {
          this.setState({placesData: res.data, lat: res.data.region.center.latitude, lng: res.data.region.center.longitude});
        }
      }
      this.setState({loading: false, offset: offset});
    });
  }

  handlerSearchKeyPress(e) {
    e.which = e.which || e.keyCode;
    if (e.which === 13) {
      console.log("handlerSearchKeyPress: ", e.target.value);
      this.setState({offset: 1});
      this.search(e.target.value, 1);
    }
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  previousOffSet() {
    this.search(this.state.place, this.state.offset - this.state.limitSearch);
  }
  nextOffSet() {
    this.search(this.state.place, this.state.offset + this.state.limitSearch);
  }
  renderOffSetBar() {

    if (this.state.placesData) {
      return (
        <div className="offset">
          <hr/>
          <span className="icon-text">
            {`Showing results ${this.state.offset} - ${this.state.offset + this.state.limitSearch}`}
          </span>
          {this.state.offset > 1
            ? <a className="waves-effect" onClick={this.previousOffSet}>
                <i className="material-icons right">navigate_before</i>
              </a>
            : null}
          <a className="waves-effect" onClick={this.nextOffSet}>
            <i className="material-icons right">navigate_next</i>
          </a>
        </div>
      );
    }
    return null;
  }
  goToPlaceButtonClick(place) {
    if (User.isLoggedIn()) {
      Meteor
        .call('goToPlace', place, function (err, result) {
          if (err) {
            if (err.message) {
              Materialize.toast(err.message, 4000);
            }
          }
        });
      console.log("on Go Clicked: ", place);
    } else {
      Materialize.toast('Please login to add this adresse!', 4000);      
    }
  }
  render() {
    let businesses = [];
    if (this.state.placesData) {
      businesses = this.state.placesData.businesses;
    }

    return (

      <div className="container">
        <div className="row">
          <div className="col m4 12">
            <div className="sideBar">
              {this.state.loading
                ? <div className="progress">
                    <div className="indeterminate"></div>
                  </div>
                : null}
              {this.state.error && this.state.error.reason && this.state.error.reason.description && <div>{this.state.error.reason.description
}</div>}
              <SearchBar onKeyPress={this.handlerSearchKeyPress}></SearchBar>
              <PlaceList
                businesses={businesses}
                onGoToPlaceClick={this.goToPlaceButtonClick}/> {this.renderOffSetBar()}
            </div>
          </div>
          <div className="col m8 12">
            <div className="mapContainer">
              <MyMap
                isMarkerShown={true}
                lng={this.state.lng}
                lat={this.state.lat}
                placesData={this.state.placesData}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}