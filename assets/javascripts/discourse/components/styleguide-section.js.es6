import computed from 'ember-addons/ember-computed-decorators';

export default Ember.Component.extend({
  tagName: 'section',
  classNameBindings: [':styleguide-section', 'sectionClass'],

  didReceiveAttrs() {
    this._super(...arguments);
    window.scrollTo(0, 0);
  },

  @computed('section')
  sectionClass(section) {
    if (section) {
      return `${section.id}-examples`;
    }
  }
});
