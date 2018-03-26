import React from 'react';
import {Footer} from 'react-materialize';
import './Footer.scss';

export default class MyFooter extends React.Component {
  render() {
    var d = new Date();
    var currentYear = d.getFullYear();
    return (
      <Footer
        className="myfooter"
        copyrights={`©${currentYear} Copyright `}
        moreLinks={
        <a className = "grey-text text-lighten-4 right" href = "https://khacquyetdang.github.io"
        target="-blank"> 
        Khac Quyet DANG </a>}>
        </Footer>
    );
  }
}
