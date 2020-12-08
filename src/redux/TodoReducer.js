import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from '../actions/action';
import { ALL } from '../actions/action';


let initialState = {
    todo: {}
};

export const todoState = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return (
                {
                    ...state,
                    todo: {
                        ...state.todo,
                        [action.payload.id]: {
                            id: action.payload.id,
                            content: action.payload.content,
                            completed: false

                        },
                    },
                }
            )
        }
        case TOGGLE_TODO: {
            if (action.payload.isRemove) {
                delete state.todo[action.payload.id];

                return ({
                    ...state,
                    todo: {
                        ...state.todo
                    }
                })
            } else {
                return (
                    {
                        ...state,
                        todo: {
                            ...state.todo,
                            [action.payload.id]: {
                                ...state.todo[action.payload.id],
                                completed: !(state.todo[action.payload.id].completed)
                            }
                        }

                    }
                )
            }
        }
        default:
            return state;
    }
};

let filterInitialState = {
    activeFilter: ALL
}

export const todoFilter = (state = filterInitialState, action) => {
    switch (action.type) {
        case SET_FILTER: {
            return ({
                activeFilter: action.payload.filter
            })
        }
        default: {
            return state;
        }
    }
}