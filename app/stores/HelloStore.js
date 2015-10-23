import alt from '../alt';
import HelloActions from '../actions/HelloActions';

class HelloStore {
  constructor() {
    this.bindActions(HelloActions);
    this.greetings = '';
  }

  onGetGreetingsSuccess(greetings) {
    this.greetings = greetings;
  }

  onGetGreetingsFail(jqXhr) {
    console.log("poops");
 }
}

export default alt.createStore(HelloStore);
