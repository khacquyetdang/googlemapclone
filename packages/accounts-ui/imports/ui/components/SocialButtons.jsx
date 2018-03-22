import React from 'react';
import './Button.jsx';
import {Accounts} from 'meteor/accounts-base';
//import 'ionicons/dist/scss/ionicons.scss';

export class SocialButtons extends React.Component {
  render() {
    let { oauthServices = {}, className = "social-buttons" } = this.props;
    return(
      <div className={ className }>
        {Object.keys(oauthServices).map((id, i) => {
          console.log("social button: ", i);
          return <Accounts.ui.Button {...oauthServices[id]} key={i} />;
        })}
      </div>
    );
  }
}

Accounts.ui.SocialButtons = SocialButtons;
