var React = require('react');
var ThemeStore = require('../stores/ThemeStore');
var ButtonTemplate = require('./buttonTemplate')

var ThemeSelect = React.createClass({
  getInitialState() {
    return ThemeStore.getState();
  },

  toggleTheme() {

  },

  changeTheme(css) {
    return(
      <link rel="stylesheet" href={css}/>
    )
  },

  render() {
    return(
      <g id="theme-select">
        <ButtonTemplate clickAction position="0"/>
      </g>
    )
  }
});
