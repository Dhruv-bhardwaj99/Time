import {
    combineReducers,
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
  } from "redux";
  import { storyReducer } from "./reducer";
  import thunk from "redux-thunk";
  
  const root = combineReducers({
    story: storyReducer,
  });
  
  export const store = createStore(
    root,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  
  console.log("inital state", store.getState());