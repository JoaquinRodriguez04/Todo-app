import './App.css';
import MainTodo from './components/MainTodo';
import { TodoProvider } from './components/TodoContext';

function App() {

  return (
    <TodoProvider>
      <MainTodo/>
    </TodoProvider>
  )
};

export default App;
