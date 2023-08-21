import { useContext } from "react";
import { TodoContext } from "./TodoContext";

const FilterTodoMobile = () => {

    const {
        handleAllTodos,
        handleActiveTodos,
        handleCompletedTodos,
        mode
    } = useContext(TodoContext);

    return (
      <div className={`todo-absolute filter-todo-mobile ${mode && 'filter-todo-mobile-mode-dark'}`}>
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
    )
};

export default FilterTodoMobile;
