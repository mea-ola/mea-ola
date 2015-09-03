var React = require('react');
var ThemeStore = require('../stores/ThemeStore');
var ButtonTemplate = require('./buttonTemplate');
var ThemeActions = require('../actions/ThemeActions');

var ThemeSelect = React.createClass({
  changeTheme(css) {
    ThemeActions.updateTheme(ThemeStore.getState().theme+1);
  },

  render() {
    return(
      <g id="theme-select">
        <ButtonTemplate clickHandler={this.changeTheme} position={this.props.position} size={this.props.size}/>
      </g>
    )
  }
});

module.exports = ThemeSelect
