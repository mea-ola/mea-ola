var alt = require('../alt');
var ThemeActions = require('../actions/ThemeActions');

class ThemeStore {
  constructor() {
    this.theme = 0;
    this.colors = ["green", "orange", "purple", "yellow"];

    this.bindActions(ThemeActions);
  }

  onUpdateTheme(theme) {
    this.theme = theme;
    this.errorMessage = null;
  }
}

module.exports = alt.createStore(ThemeStore, 'ThemeStore');
