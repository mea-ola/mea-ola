var alt = require('../alt');
var ThemeActions = require('../actions/ThemeActions');

class ThemeStore {
  constructor() {
    this.theme = "blueStyle";

    this.bindActions(ThemeActions);
  }

  onUpdateTheme(theme) {
    this.theme = theme;
    this.errorMessage = null;
  }
}

module.exports = alt.createStore(ThemeStore, 'ThemeStore');
