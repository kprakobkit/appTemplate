import alt from '../alt';

class HelloActions {
  constructor() {
    this.generateActions(
      'getGreetingsSuccess',
      'getGreetingsFail'
    );
  }

  getGreetings() {
    $.ajax({ url: '/api/greetings' })
    .done((data) => {
      this.actions.getGreetingsSuccess(data)
    })
    .fail((jqXhr) => {
      this.actions.getGreetingsFail(jqXhr)
    });
  }
}

export default alt.createActions(HelloActions);
