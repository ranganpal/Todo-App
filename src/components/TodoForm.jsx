import React, { useState } from 'react'
import { useTodo } from '../context'

function TodoForm() {
  const [todoMsg, setTodoMsg] = useState("")
  const {addTodo} = useTodo()

  return (
    <form
      className="flex"
      onSubmit={(event) => {
        event.preventDefault()
        addTodo({
          id: Date.now(),
          todoMsg: todoMsg,
          completed: false
        })
        setTodoMsg("")
      }}
    >
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todoMsg}
        onChange={event => setTodoMsg(event.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 duration-200 hover:bg-green-700"
        disabled={todoMsg === ""}
      >
        Add
      </button>
    </form>
  )
}

export default TodoForm