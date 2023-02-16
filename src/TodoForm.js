import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

const TodoForm = () => {
    const dispatch = useDispatch();
    const initialState = {
        text: "",
        isComplete: false
    }
    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        setFormData(data=> ({...data, [name] : value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD', payload: formData});
        setFormData(initialState);
    }
    return (
        <div className="TodoForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="text">Todo:</label>
                <input 
                name = "text"
                id="text"
                type="text" 
                placeholder="I need to do..." 
                value={formData.text} 
                onChange={handleChange} 
            />
                <input 
                name = "isComplete"
                type="checkbox" 
                onChange={handleChange}
                checked={formData.isComplete} 
            />
            <button type="submit">Add Todo</button>
        </form>
        </div>
    )
}

export default TodoForm;