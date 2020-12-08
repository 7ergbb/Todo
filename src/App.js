import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from "./redux/store";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter"

const MAX_TODO_TEXT_SIZE = 15;

function App() {
    return (
        <Provider store={store}>
            <div className="todo">
                <header className="todo-header">
                    <h1>TODO</h1>
                </header>
                <AddTodo n ={MAX_TODO_TEXT_SIZE}/>
                <TodoList />
                <Filter/>

            </div>
        </Provider>
    );
}

export default App;
