import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import TodoList from './TodoList'

const mocks = vi.hoisted(() => ({
  todos: [
    { id: 1, text: 'Buy milk', completed: false },
    { id: 2, text: 'Walk the dog', completed: true },
  ],
  toggleTodo: vi.fn(),
  deleteTodo: vi.fn(),
}))

vi.mock('../store/todoStore', () => ({
  useTodoStore: (selector: (store: typeof mocks) => unknown) => selector(mocks),
}))

describe('TodoList', () => {
  beforeEach(() => {
    mocks.toggleTodo.mockClear()
    mocks.deleteTodo.mockClear()
  })

  it('shows tasks and calls toggle and delete', () => {
    render(<TodoList />)

    expect(screen.getByText('Buy milk')).toBeInTheDocument()
    expect(screen.getByText('Walk the dog')).toHaveClass('line-through')

    const checkboxes = screen.getAllByRole('checkbox')
    fireEvent.click(checkboxes[0])
    expect(mocks.toggleTodo).toHaveBeenCalledWith(1)

    const deleteButtons = screen.getAllByRole('button', { name: 'Delete' })
    fireEvent.click(deleteButtons[1])
    expect(mocks.deleteTodo).toHaveBeenCalledWith(2)
  })
})