import { Reducer } from './action';
import { State } from './state';

type StoreListener = (state: State | undefined) => void;

/**
 * Max number od states to store
 */
const MAX_STATES = 10;

class Store {
  /**
   * Return current(latest) state
   */
  public get state(): State {
    return this.states[this.states.length - 1];
  }

  /**
   * Holds arrays of listeners to run during dispatch
   * Listeners can be added through Store.subscribe method
   */
  private listeners: StoreListener[] = [];

  /**
   * Stores previous states up to number of MAX_STATES
   */
  private states: State[] = [];

  constructor() {
    this.states.push(new State());
    this.subscribe.bind(this);
  }

  /**
   * Pushes new listener to the store
   * @returns function to unsubscribe to the listener
   */
  public subscribe(listener: StoreListener) {
    this.listeners.push(listener);
    return () => this.listeners = this.listeners.filter((l) => l !== listener);
  }

  /**
   * dispatch will be called to update the state with an action/reducer
   * after updating the state subscribed listeners will be called
   * this Store will keep track of MAX_STATES states
   */
  public async dispatch(reducer: Reducer, value?: any) {
    let state = reducer(this.state, value);

    // if promise, await to get the value
    if (!(state instanceof State)) {
      state = await state;
    }

    this.states.push(state);
    // run all listeners
    for (const listener of this.listeners) {
      listener(state);
    }

    // keep states under MAX_STATES
    while (this.states.length > MAX_STATES) {
      this.states = this.states.slice(1);
    }
  }
}

// /**
//  * Create singleton State instance
//  * Freeze the object to avoid mutation to the store
//  */
// const store = Object.freeze(new Store());

// export default store;

export default new Store();
