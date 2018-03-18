import React, {Component} from 'react';
import classNames from 'classnames';
import PlaceList from '../components/PlaceList/PlaceList';
export default class Home extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      placesData: null
    };
  }
  componentDidMount() {
    let options = {
      params: {
        "location": "Paris"
      }
    };
    Meteor.call('getPlaces', options, (err, res) => {
      if (err) {
        console.log(JSON.stringify(err, null, 2))
      } else {
        console.log(res, "success!");
        if (res.statusCode === 200) {
          this.setState({placesData: res.data});
        }
      }
    });
  }
  render() {
    let businesses = [];
    if (this.state.placesData) {
      businesses = this.state.placesData.businesses;
    }
    return (
      <div className={classNames('Home', 'foo', 'bar')}>
        <div className="row">
          <div className="input-field col s6">
            <input
              value="Paris"
              id="first_name2"
              type="text"
              placeholder="Enter your destination"
              className="validate"/>
          </div>
          <div className="col s6">
            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
        <PlaceList businesses={businesses}/>
      </div>
    );
  }
}