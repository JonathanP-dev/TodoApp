import { useEffect, useState } from 'react'
import { TodosContext } from './TodosContext'


export function TodosProvider ({children}) {

  const TODOS = [
    {
      id: 1,
      content: 'Create a new design',
      active: true,
      completed: false,
    },
    {
      id: 2,
      content: 'Read the book',
      active: true,
      completed: false,
    },
    {
      id: 3,
      content: 'Delete this shit',
      active: true,
      completed: true,
    },
    {
      id: 4,
      content: 'New work',
      active: false,
      completed: false,
    },
  ]
  const [todoList, setTodoList] = useState([])
  useEffect(() => {
    setTodoList(TODOS)
  }, [])

  return(
    <TodosContext.Provider value={{todoList}}>
      {children}
    </TodosContext.Provider>
  )
}