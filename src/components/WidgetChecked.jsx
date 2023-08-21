import { useContext } from 'react';
import iconCheck from '../assets/icon-check.svg';
import { TodoContext } from './TodoContext';

const WidgetChecked = () => {

  const {mode} = useContext(TodoContext);

  return (
    <div className={`todo-circle todo-circle-checked ${mode && 'todo-circle-dark-mode'}`}>
        <img src={iconCheck} className='img-check' alt="icon-check" />
    </div>
  )
};

export default WidgetChecked;
