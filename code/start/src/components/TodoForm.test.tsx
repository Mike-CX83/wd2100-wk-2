import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import TodoForm from './TodoForm'

const { addTodo } = vi.hoisted(() => ({
  addTodo: vi.fn(),
}))

vi.mock('../store/todoStore', () => ({
  useTodoStore: (selector: (state: { addTodo: typeof addTodo }) => unknown) =>
    selector({ addTodo }),
}))

describe('TodoForm', () => {
  beforeEach(() => {
    addTodo.mockClear()
  })

  it('adds a task and clears the input', () => {
    render(<TodoForm />)

    const input = screen.getByPlaceholderText('Add a task')
    fireEvent.change(input, { target: { value: 'Buy milk' } })
    fireEvent.click(screen.getByRole('button', { name: 'Add' }))

    expect(addTodo).toHaveBeenCalledWith('Buy milk')
    expect(input).toHaveValue('')
  })
})
