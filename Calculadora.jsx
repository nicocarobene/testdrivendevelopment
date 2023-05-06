import { useState } from 'react'
import { evaluate } from 'mathjs'
export const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]]

export const operation = ['+', '-', '*', '/']

const Calculator = () => {
  const [value, setValue] = useState('')

  return (
    <section>
      <h1>Calculadora</h1>
      <input value={value} readOnly />
      <div role='grid'>
        {rows.map((row, index) => (
          <div key={index} role='row'>
            {row.map(num => (
              <button onClick={() => setValue(value.concat(num))} key={num}>{num}</button>
            ))}
          </div>
        ))}
        {operation.map((op) => (
          <button onClick={() => setValue(value.concat(op))} key={op}>{op} </button>
        ))}
        <button onClick={(e) => setValue(evaluate(value))}>=</button>
      </div>
    </section>
  )
}
export default Calculator
