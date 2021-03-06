import { combineReducers } from 'redux';
import { actions } from './actions';

/**
 * Messages this user has
 */
const messages = (state = [], action) => {
    console.log("messages (REDUCERS)");
    
    switch (action.type) {
        case actions.NEW_MESSAGE:
            return [...state, action.message];
    }
    
    return state;
};

/**
 * User's current name
 */
const name = (state = "Unnamed", action) => {
    console.log("name (REDUCERS)");
    switch (action.type) {
        case actions.SET_NAME:
            return action.name;
    }

    return state;
}

/**
 * The shape of the state
 */
export default combineReducers({
    messages,
    name
});