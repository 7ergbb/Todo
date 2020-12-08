import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions/action";

const TodoItem = ({ todo, id, toggleTodo }) => (
    <div className="todo-item">
        <label className={todo.completed ? 'todo-item-completed' : ''}
            onClick={() => toggleTodo(id)}>
            {todo.content}
        </label>
        <button onClick={() => toggleTodo(id, true)}>Удалить</button>
    </div>
);

export default connect(null, { toggleTodo })(TodoItem);
