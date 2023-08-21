import { useContext } from 'react';
import { TodoContext } from './TodoContext';

const WidgetEmpty = () => {

  const {mode} = useContext(TodoContext);

  return (
    <div className={`todo-circle ${mode && 'todo-circle-dark-mode'}`}></div>
  )
};

export default WidgetEmpty;
