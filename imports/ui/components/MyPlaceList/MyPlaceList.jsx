import React, {Component} from 'react';
import classNames from 'classnames';
import MyPlaceItem from '../MyPlaceItem/MyPlaceItem';
import './MyPlaceList.scss';
export default class MyPlaceList extends Component
{

  render() {

    return (
      <div className="myplacelist">
        {this.props.places && this
          .props
          .places
          .map((place, index) => {
            return <MyPlaceItem key={index} businesse={place}/>
          })
}
      </div>
    )
  }
}
