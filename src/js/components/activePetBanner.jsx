// activePetBanner.jsx
// created by the Mea Ola Team
// React Class for rendering the active pets basic info

var React = require('react');

// A way to display some basic stuff about the active pet selected
var ActivePetBanner = React.createClass({
  render: function() {
    return (
      <g id="ActivePetBanner">
        <rect className="banner purple_set" width="100%" height="23"></rect>
        <text y="20" x="5"> active pet </text>
      </g>
    );
  }
});

module.exports = ActivePetBanner;
