// actionsBanner.jsx
// created by the Mea Ola Team
// React Class for rendering the user action boxes

var React = require('react');
var ButtonTemplate = require('./buttonTemplate');
var ThemeSelect = require('./ThemeSelect');

// The main application
var ActionsBanner = React.createClass({
  render: function() {
    return (
      <g id="ActionsBanner">
        <rect className="banner purple_set" width="100%" height="48"></rect>
        <ThemeButton size="48" position="0"/>
      </g>
    );
  }
});

// Button that redirects the user to the mea-ola homepage
var ThemeButton = React.createClass({
  render: function() {
    return (
      <ButtonTemplate position={this.props.position} size={this.props.size}/>
    );
  }
});

module.exports = ActionsBanner;
