
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Todo from './Todo';
import uuid from 'react-uuid';

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(store => store.todos);
    return(
        <div>
            {todos.map(t => <Todo key={t.id} id={t.id} text={t.text} isComplete={t.isComplete} />)}
        </div>
    )
}

export default TodoList;