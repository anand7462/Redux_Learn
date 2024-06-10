const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE';

// action creator function that returns an action of type 'BUY_CAKE'
function buyCake() {
    return {
      type: BUY_CAKE,
      info: "First Redux Action",
    };
  }

// initial state
const initialstate = {
  numOfCakes: 20,
};

// reducer function
const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default: return state
  }
};

// Creating store 
const store = createStore(reducer);
console.log("Initial State", store.getState());

// Registers listeners via subscribe
const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);

// updating state via dispatch
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
