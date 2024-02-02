import { Todo } from '../Todo/Todo'
import { TodoItem } from '../TodoItem/TodoItem'


export function TodoList () {
  
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

  return (
    <ul>
      {TODOS.map(todo => (
        <TodoItem key={todo.id}>
          <Todo todo={todo}/>
        </TodoItem>
      ) )}
    </ul>
  )
}