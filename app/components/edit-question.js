import Ember from 'ember';

export default Ember.Component.extend({
  updatedQuestion: false,
  actions: {
    updateQuestion() {
      this.set('updatedQuestion', true);
    },
    noUpdate() {
      this.set('updatedQuestion', false);
    },
    update(question) {
      var params = {
        author: this.get('authorUpdate'),
        notes: this.get('notesUpdate'),
        question: this.get('questionUpdate')
      };
      this.set('updatedQuestion', false);
      this.sendAction('update', question, params);
    }
  }
});
