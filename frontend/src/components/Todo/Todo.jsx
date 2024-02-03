import { ActiveBtn } from '../../elements/ActiveBtn'
import './Todo.scss'

export function Todo ({todo}) {

  return (
    <article className='todo-container'>
      <div className='todo-container--check-container'>
        <ActiveBtn active={todo.active}/>
        <span className={todo.completed ? 'todo-content--completed' : ''}>{todo.content}</span>
      </div>
      <button className='delete-todo--btn'>
        <img src="./icon-cross.svg" alt="" />
      </button>
    </article>
  )
}