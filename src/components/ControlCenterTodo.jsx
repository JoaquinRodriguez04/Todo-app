import React from 'react'
import BannerTodo from './bannerTodo';
import CreateTodo from './CreateTodo';
import ListTodo from './ListTodo';
import ReorderTodo from './ReorderTodo';
import FilterTodoMobile from './FilterTodoMobile';

const ControlCenterTodo = () => {
  return (
    <section className='control-center-todo-container'>
        <BannerTodo/>
        <CreateTodo/>
        <ListTodo/>
        <FilterTodoMobile/>
        <ReorderTodo/>
    </section>
  )
};

export default ControlCenterTodo;
