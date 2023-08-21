import { useContext } from 'react';
import { TodoContext } from './TodoContext';
import HeroTodo from '../components/HeroTodo';
import ControlCenterTodo from '../components/ControlCenterTodo';

const MainTodo = () => {

    const {mode} = useContext(TodoContext);

    return (
      <main className={`app-container ${mode && 'app-mode-dark'}`}>
          <HeroTodo/>
          <ControlCenterTodo/>
      </main>   
    )
};

export default MainTodo;
