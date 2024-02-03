import { useState } from 'react';
import { ActiveBtn } from '../../elements/ActiveBtn';
import { Field } from '../Field/Field';
import { Input } from '../Input/Input';


export function CreateTodo () {
  const [active, setActive] = useState(false)

  const createTodo = (e) => {
    e.preventDefault()
  }

  const handleActive = () => {
    setActive(!active)
  }
  return (
      <form onSubmit={createTodo}>
        <Field>
          <ActiveBtn active={active} onClick={handleActive}/>
          <Input id='todo' name='todo' placeholder='create new design..' type='text' />
        </Field>
      </form>
  
  )
}