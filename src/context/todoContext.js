import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos:[
    {
      id: 0,
      todoMsg: "Todo Msg",
      completed: false
    },
  ],

  addTodo: (todo) => {},
  updateTodo: (todo) => {},
  deleteTodo: (todo) => {}
})

export const TodoProvider = TodoContext.Provider

export function useTodo() {
  return useContext(TodoContext)
}