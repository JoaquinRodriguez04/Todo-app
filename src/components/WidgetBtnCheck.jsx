import { useContext } from "react";
import { TodoContext } from "./TodoContext";
import WidgetChecked from "./widgetChecked";
import WidgetEmpty from "./WidgetEmpty";

const WidgetBtnCheck = ({todo, index}) => {

  const {handleSetCheck} = useContext(TodoContext);

  return (
    <button 
    className="todo-item-btn-widget"
    onClick={() => handleSetCheck(index)}>
        {todo.checked ? <WidgetChecked/> : <WidgetEmpty/>}
    </button>
   
  )
};

export default WidgetBtnCheck;
