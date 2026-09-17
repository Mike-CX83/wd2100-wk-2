import { FormEvent, useState } from 'react'
import { useTodoStore } from '../store/todoStore'

function TodoForm() {
  const [text, setText] = useState('')
  const addTodo = useTodoStore((state) => state.addTodo)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Add a task"
        className="flex-1 border rounded p-2"
      />
      <button type="submit" className="border rounded px-3">
        Add
      </button>
    </form>
  )
}

export default TodoForm
