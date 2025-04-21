import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import CounterApp from "./pages/CounterApp"
import TodoList from "./pages/TodoList"
import ShoppingCart from "./pages/ShoppingCart"
import HomePage from "./pages/HomePage"

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter-app" element={<CounterApp />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </div>
  )
}

export default App
