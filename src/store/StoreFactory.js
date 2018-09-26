import { createStore, applyMiddleware } from 'redux';
import { MainReducer } from './Reducers.js';
import thunk from 'redux-thunk';

const initialState = {
    friends:[
      {
        "name":"Friend 1", 
        "photo":"home", 
        "scores":[
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          4,
          3,
        ]
      },
    ],
    questions:[
      "Do you like butterflies?",
      "How much do you care about other creatures?",
      "How much effort does it take you to be nice?",
      "Another question",
      "Another question2",
      "Another question3",
      "Another question4",
      "Another question5",
      "Another question6",
      "Another question7",
    ],
    answers: [1,1,1,1,1,1,1,1,1,1],
    compatible_friend: null,
    compatible_shown: false,
  }

const logger = store => next => action => {
    let result
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

const saver = store => next => action => {
    let result = next(action)
    localStorage['redux-store'] = JSON.stringify(store.getState())
    return result
}

const storeFactory = (state=initialState) =>
    // createStore(MainReducer, state);
    applyMiddleware(logger, saver, thunk)(createStore)(
        MainReducer,
        (localStorage['redux-store']) ?
            JSON.parse(localStorage['redux-store']) :
            state,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    )

export default storeFactory