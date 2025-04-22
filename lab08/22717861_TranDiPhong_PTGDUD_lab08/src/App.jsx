import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import CounterApp from "./pages/CounterApp"
import TodoList from "./pages/TodoList"
import ShoppingCart from "./pages/ShoppingCart"
import HomePage from "./pages/HomePage"
import ProductList from "./pages/ProductList"

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter-app" element={<CounterApp />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </div>
  )
}

export default App
