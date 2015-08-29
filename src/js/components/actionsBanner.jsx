// actionsBanner.jsx
// created by the Mea Ola Team
// React Class for rendering the user action boxes

var React = require('react');
var ButtonTemplate = require('./buttonTemplate');

// The main application
var ActionsBanner = React.createClass({
  render: function() {
    return (
      <g id="ActionsBanner">
        <rect className="banner" width="100%" height="48"></rect>
        <ButtonTemplate size="48" position="0"/>
        <ButtonTemplate size="48" position="1"/>
        <ButtonTemplate size="48" position="2"/>
      </g>
    );
  }
});

module.exports = ActionsBanner;
