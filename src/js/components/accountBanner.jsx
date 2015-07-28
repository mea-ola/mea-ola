// accountBanner.jsx
// created by the Mea Ola Team
// React Class for rendering the account banner

var React = require('react');

// The banner for the application that shows the user name, settings button
//    and the link to the Mea-Ola site
var AccountBanner = React.createClass({
  render: function() {

    return (
      <g>
        <MeaOlaLink />
        <AccountLink />
        <ExtSettingsDropdown />
      </g>
    );
  }
});

// Button that redirects the user to the mea-ola homepage
var MeaOlaLink = React.createClass({
  render: function() {
    return (
      <g>
        {/*button that redirects user to the mea-ola homepage*/}
      </g>
    );
  }
});

// Button that redirects the user to their account settings
var AccountLink = React.createClass({
  render: function() {
    return (
      <g>
        {/*button that redirects user to their account settings*/}
      </g>
    );
  }
});

// Button that reveals in extension settings for the application
var ExtSettingsDropdown = React.createClass({
  render: function() {
    return (
      <g>
        {/*button that reveals extension settings*/}
      </g>
    );
  }
});

module.exports = AccountBanner;
