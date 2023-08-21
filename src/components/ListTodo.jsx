import { useContext } from "react";
import { TodoContext } from "./TodoContext";

import iconCross from '../assets/icon-cross.svg';
import WidgetBtnCheck from "./WidgetBtnCheck";

const ListTodo = () => {

    const {
        todos, 
        setTodos, 
        amountTodos,      
        handleAllTodos,
        handleActiveTodos,
        handleCompletedTodos,
        filterTodos,
        mode
    } = useContext(TodoContext);

    const handleDeleteTodo = (index) => {
        const todoId = index;
        setTodos(todos.filter((todo, index) => index != todoId));
    };

    const handleDeleteCompleted = () => {
        setTodos(todos.filter((todo) => !todo.checked));
    };

    return (
        <section className={`list-todo-container todo-absolute ${mode && 'create-mode-dark'}`}>
            <ul className='todo-list'>
                {filterTodos.map((todo, index) => {
                    return (
                        <li className={`todo-item ${mode && 'todo-item-mode-dark'}`} key={index}>
                            <div className="todo-item-wrapper-left">
                                <WidgetBtnCheck todo={todo} index={index} />
                                <p className={`todo-item-content ${todo.checked && 'todo-item-checked'} ${mode && 'todo-item-checked-mode-dark'}`}>{todo.task}</p>     
                            </div>
                            <button onClick={() => handleDeleteTodo(index)}>
                                <img src={iconCross} className="todo-item-cross" alt="icon-cross" />
                            </button>
                        </li>
                    )
                })}
            </ul>
            <div className="todo-actions-wrapper">
                <button 
                className={`todo-actions-btn ${amountTodos() === 0 && 'btn-strike'}`}>
                    {amountTodos()} items
                </button>
                <div className='todo-filter-items'>
                    <button 
                    className='todo-filter-items-btn'
                    onClick={handleAllTodos}>All</button>
                    <button 
                    className='todo-filter-items-btn'
                    onClick={handleActiveTodos}>Active</button>
                    <button 
                    className='todo-filter-items-btn'
                    onClick={handleCompletedTodos}>Completed</button>
                </div>
                <button 
                className='todo-actions-btn'
                onClick={handleDeleteCompleted}>Clear Completed</button>
            </div>
        </section>
    )
};

export default ListTodo;
