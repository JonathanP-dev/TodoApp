

import { CreateTodo } from './components/CreateTodo/CreateTodo'
import { FilterTodos } from './components/FilterTodos/FilterTodos'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Home } from './components/Main/Home'
import { Panel } from './components/Panel/Panel'
import { TodoList } from './components/TodoList/TodoList'

function App() {

  return (
    <>
      <Header/>
      <Home>
        <Panel>
          <CreateTodo />
        </Panel>
        <Panel>
          <TodoList />
        </Panel>
        <Panel>
          <FilterTodos />
        </Panel>
      </Home>
      <Footer />
    </>
  )
}

export default App
