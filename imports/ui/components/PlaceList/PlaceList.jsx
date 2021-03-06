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
            onItemHover={this.props.onItemHover}
            onPlaceClick={this.props.onPlaceClick} 
            onPlaceContainerClick={this.props.onPlaceContainerClick}
            key={index} businesse={businesse}/>
          })
}
      </div>
    )
  }
}
