import { useEffect, useState } from "react"
import { TodoProvider } from "./context"
import { TodoForm, TodoItem } from "./components"


function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos(prevTodos => [todo, ...prevTodos])
  }

  const updateTodo = (todo) => {
    setTodos((prevTodos) => (
      prevTodos.map((prevTodo) => (
        prevTodo.id === todo.id ? todo : prevTodo
      ))
    ))
  }

  const deleteTodo = (todo) => {
    setTodos((prevTodos) => (
      prevTodos.filter(prevTodo => prevTodo.id !== todo.id)
    ))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) setTodos(todos)
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      <div className="bg-[#1c2f4a] min-h-screen py-8">
        <div className="bg-[#0f1e38] w-full max-w-2xl mx-auto shadow-2xl rounded-xl p-6 text-white text-lg">

          <h1 className="text-4xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>

          <div className="mb-4">
            <TodoForm />
          </div>

          <div className="flex flex-wrap gap-y-3">
            {
              todos.map((todo) => (
                <div
                  key={todo.id}
                  className="w-full"
                >
                  <TodoItem todo={todo} />
                </div>
              ))
            }
          </div>

        </div>
      </div>
    </TodoProvider>
  )
}

export default App
