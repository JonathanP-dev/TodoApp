import './ActiveBtn.scss'

export function ActiveBtn ({active = false, onClick}) {
  
  return (
    <button onClick={onClick} className={active ?'btn todo-btn--active' : 'btn'}>
      {active && <img src="./icon-check.svg" alt="" />}
    </button>
  )
}