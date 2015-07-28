// main.jsx
// main javascript application, which renders the Mea-Ola Garden

var React = require('react');
var GardenWindow = require('./components/gardenWindow');
//var flux = require('./flux');

React.render(<GardenWindow />, document.getElementById("main"));
