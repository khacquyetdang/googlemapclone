import React, {Component} from 'react';
import classNames from 'classnames';
import PlaceItem from '../PlaceItem/PlaceItem';
import './PlaceList.scss';
export default class PlaceList extends Component
{

  render() {

    return (
      <div className="placelist">
        {this
          .props
          .businesses
          .map((businesse, index) => {
            return <PlaceItem
            onGoToPlaceClick={this.props.onGoToPlaceClick} 
            key={index} businesse={businesse}/>
          })
}
      </div>
    )
  }
}
