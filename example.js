const path = require('path');
const Max = require('max-api');
const redux = require('redux');

// actionTypes
const CHANGED_SLIDER_VALUES = 'CHANGED_SLIDER_VALUES';

// reducers
function sliderA (state = 0.0, action) {
  switch (action.type) {
    case CHANGED_SLIDER_VALUES:
      return action.payload.sliderA;
    
    default:
      return state;
  }
}
function sliderB (state = 0.0, action) {
  switch (action.type) {
    case CHANGED_SLIDER_VALUES:
      return action.payload.sliderB;
    default:
      return state;
  }
}

const store = redux.createStore(redux.combineReducers({
    sliderA: sliderA,
    sliderB: sliderB
}));

const outputStateToOutlet = function () {
  Max.outlet(store.getState());
};

// When state changes, forward to outlet of Max object.
store.subscribe(outputStateToOutlet);

// When dispatch comes in, forward it to Redux store.
Max.addHandler("dispatch", (action) => {
  store.dispatch(action);
});

Max.post(`Loaded the ${path.basename(__filename)} script`);
// Forward initial state to Max outlet.
outputStateToOutlet();
