import { describe, it, expect } from "vitest";

const canReconfigure=(from: string, to: string): boolean=>{
    if(typeof from !== 'string') throw new Error ('from is not a string')
    if(typeof to !== 'string') throw new Error ('to is not a string')
    if(from.length !== to.length)return false
    const hasSameUniqueLetters= new Set(from).size === new Set(to).size
    if(!hasSameUniqueLetters)return false

    const transformation={}
    for(let i=0; i<from.length; i++){
        const fromLetter= from[i]
        const toLetter= to[i]
        const sortedLetter= transformation[fromLetter]
        if (sortedLetter && sortedLetter !== toLetter)return false
        
        transformation[fromLetter]= toLetter
    }

    return true
}   

describe('canReconfigure', ()=>{
    it('should be a function',()=>{
        expect(canReconfigure).toBeTypeOf('function')
    })
    it('should throw first parameter is missing',()=>{
        expect(()=>canReconfigure()).toThrow()
    })
    it('should throw first parameter is not a string',()=>{
        expect(()=>canReconfigure(2)).toThrow()
    })
    it('should throw second parameter is missing',()=>{
        expect(()=>canReconfigure('hola')).toThrow()
    })
    it('should throw second parameter is not a string',()=>{
        expect(()=>canReconfigure('hola',2)).toThrow()
    })
    it('should return a boolean',()=>{
        expect(canReconfigure('hola','quetal')).toBeTypeOf('boolean')
    })
    it('should return false if string provided have a differente lenght',()=>{
        expect(canReconfigure('abc','de')).toBe(false)
    })
    it('should return false if string provided have a different number of unique letters',()=>{
        expect(canReconfigure('abc','ddd')).toBe(false)
    })
    it('should return false if string has different order of transformation',()=>{
        expect(canReconfigure('XBOX','XXBO')).toBe(false)
    })
})