import { useContext } from "react";
import { TodoContext } from "./TodoContext";

const HeroTodo = () => {

  const {mode, animationMode} = useContext(TodoContext);

  return (
    <div className={`hero-todo-container ${mode && 'image-mode-dark'} ${animationMode && 'image-mode-animation'}`}>
      {/* contiene la imagen de fondo */}
    </div>
  )
};

export default HeroTodo;
