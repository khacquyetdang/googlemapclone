import React, {Component} from 'react';
import classNames from 'classnames';

export default class Home extends Component
{
  componentDidMount() {
    let options = {
      params: {
        "location": "Paris"
      }
    };
    Meteor.call('getPlaces', options, function (err, res) {
      if (err) {
        console.log(JSON.stringify(err, null, 2))
      } else {
        console.log(res, "success!")
      }
    });
  }
  render() {
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
      </div>
    )
  }
}
