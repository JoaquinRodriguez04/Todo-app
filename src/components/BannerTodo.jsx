// icono para modo claro
import iconLight from '../assets/icon-sun.svg';

// icono para modo oscuro
import iconMoon from '../assets/icon-moon.svg';

import { TodoContext } from './TodoContext';
import { useContext } from 'react';

const BannerTodo = () => {
  
  const {mode, setMode, animationMode, setAnimationMode} = useContext(TodoContext);

  const handleSetMode = () => {
    setMode(!mode);
    setAnimationMode(false);
  };

  return (
    <div className='banner-todo-container'>
        <h2 className='banner-title'>TODO</h2>
        <button
        onClick={handleSetMode}>
          <img src={mode ? iconLight : iconMoon} className={`${animationMode && 'banner-todo-icon-mode'}`} alt="icon-dak-mode" />
        </button>
    </div>
  )
};

export default BannerTodo;
