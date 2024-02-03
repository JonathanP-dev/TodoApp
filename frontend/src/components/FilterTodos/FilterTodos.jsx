import { Field } from '../Field/Field';
import './FilterTodos.scss'


export function FilterTodos () {
  return(
    <Field>
      <section className='filter-todos'>
        <span>All</span>
        <span>Active</span>
        <span>Completed</span>
      </section>
    </Field>
  )
}