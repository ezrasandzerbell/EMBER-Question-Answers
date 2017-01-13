import Ember from 'ember';

export default Ember.Component.extend({
  askQuestion: false,
  actions: {

    newQuestion() {
      this.set('askQuestion', true);
    },

    saveQuestion() {
      var params = {
        author: this.get('author'),
        notes: this.get('notes'),
        question: this.get('question')
      };
      this.sendAction('saveQuestion', params);
      this.set('askQuestion', false);
    }
  }
});
