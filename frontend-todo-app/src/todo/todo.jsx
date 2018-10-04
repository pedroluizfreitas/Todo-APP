import React from 'react'

// Bibliotecas internas
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default (props) => (
  <div>
    <PageHeader name='Tasks' small='Registration form'></PageHeader>
    <TodoForm />
    <TodoList />
  </div>
) 