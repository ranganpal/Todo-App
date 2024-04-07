import React, { useState } from 'react'
import { useTodo } from '../context'

function TodoItem({ todo }) {
  const [todoMsg, setTodoMsg] = useState(todo.todoMsg)
  const [isTodoInEditingMode, setIsTodoInEditingMode] = useState(false)
  const { todos, updateTodo, deleteTodo } = useTodo()

  return (
    <div
      className={`${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"} flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black`}
    >

      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        disabled={isTodoInEditingMode}
        onChange={() => {
          updateTodo({ ...todo, completed: !todo.completed })
        }}
      />

      <input
        type="text"
        className={`${isTodoInEditingMode ? "border-black/10 px-2" : "border-transparent"} ${todo.completed ? "line-through" : ""} border outline-none w-full bg-transparent rounded-lg`}
        value={todoMsg}
        readOnly={!isTodoInEditingMode}
        onChange={(event) => {
          setTodoMsg(event.target.value)
        }}
      />

      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-200 shrink-0 disabled:opacity-50"
        disabled={todo.completed}
        onClick={() => {
          if (todo.completed) return
          if (isTodoInEditingMode) {
            updateTodo({...todo, todoMsg})
          }
          setIsTodoInEditingMode(prev => !prev)
        }}
      >
        {isTodoInEditingMode ? "📁" : "✏️"}
      </button>

      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-200 shrink-0"
        onClick={() => {
          deleteTodo(todo)
        }}
      >
        ❌
      </button>
    </div>
  )
}

export default TodoItem