import uuid from 'react-uuid'

let INITIAL_STATE;

localStorage.hasOwnProperty('todos') ? INITIAL_STATE = JSON.parse(localStorage.getItem('todos')) : INITIAL_STATE = {todos: []};

function rootReducer(state=INITIAL_STATE, action) {
    let payload = action.payload;
    switch (action.type) {
        case 'ADD':
            const {text, isComplete} = payload;
            let newTodos = {todos: [...state.todos, {id: uuid(), text, isComplete}]}
            localStorage.setItem('todos', JSON.stringify(newTodos))
            return newTodos;
        case 'MARK-COMPLETE':
            localStorage.setItem('todos', JSON.stringify(payload))
            return payload;
        case 'REMOVE':
            localStorage.setItem('todos', JSON.stringify(payload))
            return payload;
        default:
            return state;
    }
}

export default rootReducer;