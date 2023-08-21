import { useForm } from "react-hook-form";
import WidgetBtnCheck from "./WidgetBtnCheck";
import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import WidgetChecked from "./widgetChecked";
import WidgetEmpty from "./WidgetEmpty";

const CreateTodo = () => {
  
  const {register, handleSubmit, reset} = useForm();  
  const {todos, setTodos, mode} = useContext(TodoContext);
  const [checked, setChecked] = useState(false);

  const send = (data) => {
    setTodos([...todos, {task: data.todo, checked: checked}]);

    reset();
  };

  const handleSetChecked = () => {
    setChecked(!checked);
  } 

  return (
    <section className={`create-todo-container todo-absolute ${mode && 'create-mode-dark'}`}>  
      <button 
      className="create-todo-btn"
      onClick={handleSetChecked}>
        {checked ? <WidgetChecked/> : <WidgetEmpty/>}
      </button>
      <form 
      className="create-todo-form"
      onSubmit={handleSubmit(send)}>
        <input 
        type="text" 
        placeholder="Create a new todo..."
        className="create-todo-field" 
        {...register('todo')}
        />
        <button className={`create-todo-btn ${mode && 'create-todo-btn-mode-dark'}`}>
          <span className="material-symbols-outlined">done</span>
        </button>
      </form>
    </section>
  )
};

export default CreateTodo;
