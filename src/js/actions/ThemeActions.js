var alt = require('../alt');

class ThemeActions {
  updateTheme(theme) {
    this.dispatch(theme);
  }

  fetchTheme() {
    // we dispatch an event here so we can have "loading" state.
    this.dispatch();

    ThemeFetcher.fetch()
      .then((theme) => {
        // we can access other actions within our action though `this.actions`
        this.actions.updateTheme(theme);
      })
      .catch((errorMessage) => {
        this.actions.themeFailed(errorMessage);
      });
  }

  themeFailed(errorMessage) {
    this.dispatch(errorMessage);
  }
}

module.exports = alt.createActions(ThemeActions);
