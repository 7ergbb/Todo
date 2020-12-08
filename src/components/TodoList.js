import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";


const TodoList = ({ todos }) => (
    <div className="todo-list">
        {todos
            ? Object.values(todos).map((item) => {
                return <TodoItem key={item['id']}
                    id={item['id']}
                    todo={item}
                />;
            })
            : ""}
    </div>
);

const mapStateToProps = state => {
    const todos = (state.todoFilter.activeFilter === 'Все') ? state.todoState.todo
        : (state.todoFilter.activeFilter === 'Выполнено')
            ? Object.values(state.todoState.todo).filter(item => item['completed'] === true)
            : Object.values(state.todoState.todo).filter(item => item['completed'] === false)
    
    return { todos };
};


export default connect(mapStateToProps)(TodoList);
