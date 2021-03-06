import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'div',
  classNames: ['search-input'],

  focusSearchField() {
    if (!document.invisible) {
      Ember.run.scheduleOnce('afterRender', () => {
        this.$('input[type=text]')[0].focus();
      });
    }
  },

  didInsertElement() {
    this._super(...arguments);
    this.focusSearchField();
    this.set('visibilityHandler', this.focusSearchField.bind(this));
    document.addEventListener("visibilitychange", this.get('visibilityHandler'), false);
  },

  willDestroyElement() {
    this._super(...arguments);
    document.removeEventListener("visibilitychange", this.get('visibilityHandler'));
  }

});
