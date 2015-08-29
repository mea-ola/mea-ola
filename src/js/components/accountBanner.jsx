// accountBanner.jsx
// created by the Mea Ola Team
// React Class for rendering the account banner

var React = require('react');
var ButtonTemplate = require('./buttonTemplate');

// The banner for the application that shows the user name, settings button
//    and the link to the Mea-Ola site
var AccountBanner = React.createClass({
  render: function() {
    return (
      <g id="AccountBanner">
        <rect className="banner" width="100%" height="22"></rect>
        <MeaOlaLink size="26" position='0'/>
        <AccountLink size="26" position='1' />
        <ExtSettingsDropdown size="26" position='2' />
      </g>
    );
  }
});

// Button that redirects the user to the mea-ola homepage
var MeaOlaLink = React.createClass({
  render: function() {
    return (
      <ButtonTemplate position={this.props.position}/>
    );
  }
});

// Button that redirects the user to their account settings
var AccountLink = React.createClass({
  render: function() {
    return (
      <ButtonTemplate position={this.props.position}/>
    );
  }
});

// Button that reveals in extension settings for the application
var ExtSettingsDropdown = React.createClass({
  render: function() {
    return (
      <ButtonTemplate position={this.props.position}/>
    );
  }
});

module.exports = AccountBanner;
