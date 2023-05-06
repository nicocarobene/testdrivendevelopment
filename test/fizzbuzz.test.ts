import { describe, expect, it } from 'vitest'

const fizzBuzz = (num: number): number|string => {
 if(typeof num !== 'number') throw new Error('number must be a number type')

 const multiplies= {
  3: 'fizz',
  5: 'buzz',
  7: 'woff',
 }
 let result : string =''

 Object.entries(multiplies)
  .forEach(([multiplier, word] ):void => {
    if(num % multiplier=== 0) result += word
  })

 return result === '' ? num : result 
}


describe('fizzBuzz', (): void => {
  it('should be a function', (): void => {
    expect(typeof fizzBuzz).toBe('function')
  })
  it('should throw if not number is provided as parameter',()=>{
    expect(()=>fizzBuzz('h')).toThrow()
  })
  it('should return fizz if number provided is multiple of 3',()=>{
    expect(fizzBuzz(3)).toBe('fizz')
    expect(fizzBuzz(6)).toBe('fizz')
    expect(fizzBuzz(9)).toBe('fizz')
  })  
  
  it('should return buzz if number provided is multiple of 5',()=>{
    expect(fizzBuzz(5)).toBe('buzz')
    expect(fizzBuzz(10)).toBe('buzz')
    expect(fizzBuzz(20)).toBe('buzz')
  })

  it('should return fizzbuzz if number provided is multiple of 3 and 5',()=>{
    expect(fizzBuzz(15)).toBe('fizzbuzz')
    expect(fizzBuzz(30)).toBe('fizzbuzz')
    expect(fizzBuzz(45)).toBe('fizzbuzz')
  }) 

  it('should return fizzwoff if number provided is multiple of 3 and 7',()=>{
    expect(fizzBuzz(21)).toBe('fizzwoff')
    
  })
})
