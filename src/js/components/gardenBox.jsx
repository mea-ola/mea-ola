// gardenBox.jsx
// created by the Mea Ola Team
// React Class for rendering the main garden window

var React = require('react');

// The main application
var GardenBox = React.createClass({
  render: function() {
    return (
      <g id="GardenBox">
        <rect className="garden" width="100%" height="370"></rect>
      </g>
    );
  }
});

module.exports = GardenBox;
