import Ember from 'ember';

export default Ember.Component.extend({
  hasAnswer: false,
  actions: {

    answerQuestion() {
      this.set('hasAnswer', true);
    },

    noAnswer() {
      this.set('hasAnswer', false);
    },

    saveAnswer() {
      var params = {
        answer: this.get('answer'),
        author: this.get('author'),
        question: this.get('question')
      };
      this.set('answer', '');
      this.set('author', '');
      this.sendAction('saveAnswer', params);
    }
  }
});
