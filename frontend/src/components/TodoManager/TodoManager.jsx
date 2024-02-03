import { Field } from '../Field/Field';
import './TodoManager.scss'


export function TodoManager () {

  const handleClearCompleted = () => {
    console.log('Completed todos deleted')
  }
  return (
    <Field>
      <div className='todo-manager--container'>
        <span className='items-count'>5 items left</span>
        <button className='clear-completed--btn' onClick={handleClearCompleted}>Clear Completed</button>
      </div>
    </Field>
  )
}