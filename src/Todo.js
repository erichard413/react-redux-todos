import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const Todo = ({text, isComplete, id}) => {
    const todos = useSelector(store => store.todos);
    const dispatch = useDispatch();
    const markComplete = (e) => {
        e.preventDefault();
        const todosCopy = todos.filter(t => t.id !== id);
        dispatch({type: 'MARK-COMPLETE', payload: {todos: [...todosCopy, {id, text, isComplete : !isComplete}]} })
    }

    const remove = (e) => {
        e.preventDefault();
        const todosCopy = todos.filter(t => t.id !== id);
        dispatch({type: 'REMOVE', payload: {todos: [...todosCopy]}})
    }
    return (
        <>
            {isComplete ? <li style={{textDecoration: 'line-through'}}>{text} <button type="submit" onClick={markComplete}>☑️</button><button onClick={remove}>❌</button></li>:<li>{text} <button type="submit" onClick={markComplete}>✅</button><button onClick={remove}>❌</button></li>} 
        </>
    )
}

export default Todo;