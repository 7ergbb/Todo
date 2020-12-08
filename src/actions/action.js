export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_FILTER = "SET_FILTER";

export const ALL = 'Все'
export const COMPLETED = 'Выполнено'
export const INCOMPLETE = 'Невыполненный'


let nextId = 0;

export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextId, content
    }
}
)

export const toggleTodo = (id, isRemove) => ({
    type: TOGGLE_TODO,
    payload: {
        id, isRemove
    }
}
)

export const setFilter = (filter) => (
    {
        type: SET_FILTER,
        payload: {
            filter
        }
    }
)


