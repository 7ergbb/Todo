import { combineReducers } from 'redux';
import {todoState, todoFilter} from './TodoReducer'

const rootReducer = combineReducers({
    todoState,
    todoFilter
});

export default rootReducer;
