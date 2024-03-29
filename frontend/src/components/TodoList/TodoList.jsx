
import { useContext, useEffect } from 'react'
import { Todo } from '../Todo/Todo'
import { TodoItem } from '../TodoItem/TodoItem'
import { TodosContext } from '../../Contexts/TodosContext'


export function TodoList () {

  const {todoList} = useContext(TodosContext)
  useEffect(()=> {
  },[todoList])
  return (
    <ul>
      {!todoList || todoList.length === 0 ? <span>Loading..</span>
      :
      todoList.map(todo => (
        <TodoItem key={todo.id}>
          <Todo todo={todo}/>
        </TodoItem>
      ) )}
    </ul>
  )
}