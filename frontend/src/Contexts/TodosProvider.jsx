import { useEffect, useState } from 'react'
import { TodosContext } from './TodosContext'


export function TodosProvider ({children}) {

  const TODOS = [
    {
      id: 1,
      content: 'Create a new design',
      active: true,
      Completed: false,
    },
    {
      id: 2,
      content: 'Read the book',
      active: true,
      Completed: false,
    },
    {
      id: 3,
      content: 'Delete this shit',
      active: true,
      Completed: false,
    },
    {
      id: 4,
      content: 'New work',
      active: true,
      Completed: false,
    },
  ]
  const [todoList, setTodoList] = useState([])
  useEffect(() => {
    setTodoList(TODOS)
    console.log(`todoList en Context: ${JSON.stringify(todoList)}`)
  }, [])

  return(
    <TodosContext.Provider value={{todoList}}>
      {children}
    </TodosContext.Provider>
  )
}