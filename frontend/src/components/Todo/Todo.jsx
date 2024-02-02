import './Todo.scss'

export function Todo ({todo}) {
  return (
    <article className='todo-container'>
      <div className='todo-container--check-container'>
        <button>
          <img src="./icon-check.svg" alt="" />
        </button>
        <span>{todo.content}</span>
      </div>
      <button className='delete-todo--btn'>
        <img src="./icon-cross.svg" alt="" />
      </button>
    </article>
  )
}