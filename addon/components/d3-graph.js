import Ember from 'ember';
import { select } from 'd3-selection';
import layout from '../templates/components/d3-graph';

export default Ember.Component.extend({
  layout,
  tagName: 'g',
  didInsertElement() {
    this._super(...arguments);
    Ember.run.scheduleOnce('afterRender', this, 'renderChart');
  },

  renderChart() {
    let [ el ] = this.$().toArray();
    this.set('selection', select(el));
  }
});
