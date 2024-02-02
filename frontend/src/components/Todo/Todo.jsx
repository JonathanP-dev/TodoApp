import './Todo.scss'

export function Todo ({todo}) {

  return (
    <article className='todo-container'>
      <div className='todo-container--check-container'>
        <button className={todo.active ?'todo-btn--active' : ''}>
          {todo.active && <img src="./icon-check.svg" alt="" />}
        </button>
        <span className={todo.completed ? 'todo-content--completed' : ''}>{todo.content}</span>
      </div>
      <button className='delete-todo--btn'>
        <img src="./icon-cross.svg" alt="" />
      </button>
    </article>
  )
}