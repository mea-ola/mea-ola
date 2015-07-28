// gardenWindow.jsx
// created by the Mea Ola Team
// React Class for rendering the main extension window

var React = require('react');

var AccountBanner = require('./accountBanner');
var ActivePetBanner = require('./activePetBanner');
var GardenBox = require('./gardenBox');
var ActionsBanner = require('./actionsBanner');

// The main application
var GardenWindow = React.createClass({
  render: function() {
    // the viewBox defines are min-width, min-height, width, and height
    var viewBox_value = "0 0 640 800";
    return (
      <svg viewBox={viewBox_value}>
        <AccountBanner />
        <ActivePetBanner />
        <GardenBox />
        <ActionsBanner />
      </svg>
    );
  }
});

module.exports = GardenWindow;
