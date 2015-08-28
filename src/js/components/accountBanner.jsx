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
        <MeaOlaLink position='0'/>
        <AccountLink position='1' />
        <ExtSettingsDropdown position='2' />
      </g>
    );
  }
});

var ButtonTemplate = React.createClass({
  render: function() {
    var xPos = this.props.position*20;
    return (
      <g>
        <rect className="mea-ola-button" x={xPos}></rect>
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
