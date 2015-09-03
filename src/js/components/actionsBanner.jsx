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
        <rect className="banner" width="100%" height="48"></rect>
        <ThemeSelect size="48" position="0"/>
      </g>
    );
  }
});

module.exports = ActionsBanner;
