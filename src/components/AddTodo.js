import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addTodo} from "../actions/action";

function AddTodo({n, addTodo}) {
    const [value, setValue] = useState('');

    const textOnChange = (e) => {
        setValue(e.target.value)
    };

    const todoAdd = () => {
        if (value.length <= n) {
            setValue('');
            addTodo(value);
        }
    };

    let message = value.length > n ? (<p>Текст ТОДО не может быть больше {n}</p>) : "";

    return (
        <div className="todo-add">
            <input type="text"
                   onChange={textOnChange}
                   value={value}
                   placeholder="введите текст"/>
            <button disabled={value.length > n}
                onClick={todoAdd}>Добавить
            </button>
            {message}
        </div>
    )
}

export default connect(null, {addTodo})(AddTodo)
