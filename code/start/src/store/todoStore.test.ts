import { beforeEach, describe, expect, it } from 'vitest'
import { useTodoStore } from './todoStore'

describe('todoStore', () => {
  beforeEach(() => {
    useTodoStore.setState({ todos: [] })
  })

  it('adds a todo', () => {
    useTodoStore.getState().addTodo('Buy milk')

    expect(useTodoStore.getState().todos).toEqual([
      { id: 1, text: 'Buy milk', completed: false },
    ])
  })

  it('does not add a blank todo', () => {
    useTodoStore.getState().addTodo('   ')

    expect(useTodoStore.getState().todos).toEqual([])
  })

  it('toggles a todo', () => {
    useTodoStore.getState().addTodo('Buy milk')
    useTodoStore.getState().toggleTodo(1)

    expect(useTodoStore.getState().todos[0].completed).toBe(true)
  })

  it('deletes a todo', () => {
    useTodoStore.getState().addTodo('Buy milk')
    useTodoStore.getState().deleteTodo(1)

    expect(useTodoStore.getState().todos).toEqual([])
  })
})
