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
        notes: this.get('noteUpdate'),
        question: this.get('questionUpdate')
      };
      this.sendAction('update', question, params);
      this.set('updatedQuestion', false);
      console.log(params);
    }
  }
});
