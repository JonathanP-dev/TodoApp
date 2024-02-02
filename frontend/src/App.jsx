
import { useContext } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Input } from './components/Input/Input'
import { Home } from './components/Main/Home'
import { Panel } from './components/Panel/Panel'
import { TodoItem } from './components/TodoItem/TodoItem'
import { TodoList } from './components/TodoList/TodoList'
import { TodosContext } from './Contexts/TodosContext'

function App() {

  const {todoList} = useContext(TodosContext)
  console.log(todoList)
  return (
    <>
      <Header/>
      <Home>
        <Panel>
          <TodoItem>
            <Input id='todo' name='todo' placeholder='create new design..' type='text'/>
          </TodoItem>
        </Panel>
        <Panel>
          <TodoList />
        </Panel>
      </Home>
      <Footer />
    </>
  )
}

export default App
