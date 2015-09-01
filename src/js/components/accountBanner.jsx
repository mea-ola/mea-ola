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
        <rect className="banner purple_set" width="100%" height="23"></rect>
        <MeaOlaLink size="22" position='0' />
        <AccountLink size="22" position='1' />
        <ExtSettingsDropdown size="22" position='2' />
        <text id="AccountBanner-text" y="20" x="100"> MEA-OLA </text>
      </g>
    );
  }
});

// Button that redirects the user to the mea-ola homepage
var MeaOlaLink = React.createClass({
  render: function() {
    return (
      <ButtonTemplate position={this.props.position} size={this.props.size}/>
    );
  }
});

// Button that redirects the user to their account settings
var AccountLink = React.createClass({
  render: function() {
    return (
      <ButtonTemplate position={this.props.position} size={this.props.size}/>
    );
  }
});

// Button that reveals in extension settings for the application
var ExtSettingsDropdown = React.createClass({
  render: function() {
    return (
      <ButtonTemplate position={this.props.position} size={this.props.size}/>
    );
  }
});

module.exports = AccountBanner;
