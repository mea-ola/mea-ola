// main.jsx
// main javascript application, which renders the Mea-Ola Garden

var React = require('react');
var AltContainer = require('alt/AltContainer');

var GardenWindow = require('./components/gardenWindow');
var ThemeStore = require('./stores/ThemeStore');

//var flux = require('./flux');

React.render(<AltContainer component={GardenWindow} stores={
  {
    ThemeStore: ThemeStore
  }
} />, document.getElementById("main"));
