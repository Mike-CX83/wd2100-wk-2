import { create } from 'zustand'

export type Todo = {
  id: number
  text: string
  completed: boolean
}

type TodoStore = {
  todos: Todo[]
  addTodo: (text: string) => void
  toggleTodo: (id: number) => void
  deleteTodo: (id: number) => void
}

function nextId(todos: Todo[]) {
  let max = 0
  for (const todo of todos) {
    if (todo.id > max) {
      max = todo.id
    }
  }
  return max + 1
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],

  addTodo: (text) =>
    set((state) => {
      const trimmed = text.trim()
      if (trimmed === '') {
        return state
      }

      return {
        todos: [
          ...state.todos,
          { id: nextId(state.todos), text: trimmed, completed: false },
        ],
      }
    }),

  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    })),

  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}))
