import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Login from '../index'

test('login', () => {
  render(<Login />)
  const main = within(screen.getByText('Login'))
  expect(main).toBeDefined()
})
