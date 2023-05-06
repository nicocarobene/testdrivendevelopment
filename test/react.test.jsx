import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import Calculator, { operation, numbers } from '../Calculadora'

describe('calculator', () => {
  afterEach(cleanup)
  it('Calculator should be render', () => {
    render(<Calculator />)
    expect(screen.getByText('Calculadora')).toBeDefined()
  })

  it('Calculator should be render', () => {
    render(<Calculator />)
    numbers.forEach((num) => {
      expect(screen.getByText(num)).toBeDefined()
    })
  })

  it('should render 4 rows', () => {
    render(<Calculator />)
    const rows = screen.getAllByRole('row')
    expect(rows.length).toBe(4)
  })
  it('should render operator', () => {
    render(<Calculator />)
    operation.forEach((op) => {
      screen.getByText(op)
    })
  })
  it('should render equal sing', () => {
    render(<Calculator />)
    screen.getByText('=')
  })
  it('should render a input', () => {
    render(<Calculator />)
    screen.getByRole('textbox')
  })
  it('should user input after clicking a number', () => {
    render(<Calculator />)
    const one = screen.getByText('1')
    fireEvent.click(one)
    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1')
  })
  it('should user input after clicking several numbers', () => {
    render(<Calculator />)
    const one = screen.getByText('1')
    const two = screen.getByText('2')
    const three = screen.getByText('3')
    fireEvent.click(one)
    fireEvent.click(two)
    fireEvent.click(three)
    const input = screen.getByRole('textbox')
    expect(input.value).toBe('123')
  })
  it('should user input after clicking  numbers and operations', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    const plus = screen.getByText('+')
    fireEvent.click(one)
    fireEvent.click(plus)
    fireEvent.click(one)
    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1+1')
  })
  it('should calculate based on user input and show the calculation', () => {
    render(<Calculator />)
    const one = screen.getByText('1')
    const plus = screen.getByText('+')
    const equalSign = screen.getByText('=')
    fireEvent.click(one)
    fireEvent.click(plus)
    fireEvent.click(one)
    fireEvent.click(equalSign)
    const input = screen.getByRole('textbox')
    expect(input.value).toBe('2')
  })
})
