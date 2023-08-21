import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

const todosLS = JSON.parse(localStorage.getItem('todos')) || [];
const modeLS = JSON.parse(localStorage.getItem('mode')) || false;

export const TodoProvider = ({children}) =>{
    // sera el estado que maneje todas las tareas que agregue el usuario
    const [todos, setTodos] = useState(todosLS);
    
    // iniciamos con all para renderizar todos los todos o tareas
    const [filter, setFilter] = useState("all");

    // estado para setear los todos segun el filtro y luego renderizarlo en el map del ListTodo
    const [filterTodos, setFilterTodos] = useState([]);

    // estado para maenjar el modo oscuro y modo claro
    const [mode, setMode] = useState(modeLS);

    // estado para maenjar las animaciones del modo oscuro y modo claro
    const [animationMode, setAnimationMode] = useState(false);

    // funcion encargada de hacer el check del todo o tarea
    const handleSetCheck = (index) => {
        const updatedTodos = [...todos];
        const verifyChecked = updatedTodos[index].checked;
        updatedTodos[index].checked = !verifyChecked;
        setTodos(updatedTodos);
    };

    // funcion encargada de sumar todos los items o todos que tiene guardado el usuario
    const amountTodos = () => {
        return todos.length;
    };

    // funcion de setear el filtro de los todos en ==> all
    const handleAllTodos = () => {
        setFilter("all");
    };
    // funcion de setear el filtro de los todos en ==> active
    const handleActiveTodos = () => {
        setFilter("active");
    };
    // funcion de setear el filtro de los todos en ==> completed
    const handleCompletedTodos = () => {
        setFilter("completed");
    };

    // useEffect encargado de setear el el estado filterTodos con el array segun el filtro 
    useEffect(() => {
        if (filter === "all") {
          setFilterTodos(todos);
        } else if (filter === "active") {
          const returnActiveTodos = todos.filter((todo) => !todo.checked);
          setFilterTodos(returnActiveTodos);
        } else if (filter === "completed") {
          const returnCompletedTodos = todos.filter((todo) => todo.checked);
          setFilterTodos(returnCompletedTodos);
        }
    }, [todos, filter]);

    // useEffect encargado de guardar los todos o tareas en el localStorage y que queden guardados aunque se actulice
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // useEffect encargado de guardar el modo seleccionado en el localStorage y que quede guardados aunque se actulice
    useEffect(() => {
        localStorage.setItem('mode', mode);
    }, [mode]);
    
    // useEffect encargado de setear el estado animationMode en true si cambia el estado mode
    useEffect(() => {
        setAnimationMode(true);
    }, [mode]);

    return (
        <TodoContext.Provider value={{
            todos,
            setTodos,
            amountTodos,
            handleSetCheck,
            handleAllTodos,
            handleActiveTodos,
            handleCompletedTodos,
            filterTodos,
            mode,
            setMode,
            animationMode,
            setAnimationMode
        }}>
            {children}
        </TodoContext.Provider>
    )
};