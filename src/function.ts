import { Mark, Color } from "./enums"
import { Deck } from "./type"

export function createDeck (): Deck {
    const result: Deck = []
    const marks = Object.values(Mark)
    const color = Object.values(Color)
    for(const n of marks) {
      for (const c of color) {
        result.push({
          mark: n,
          color: c
        })
      }
    }
    return result
  }
  
  export function pushDeck (dek: Deck){
    let result = '\n'
      dek.forEach((item,i)=> {
        let str = item.color + item.mark
        result += str + '\t'
        if ((i+1)% 4 === 0) {
          result += '\n' 
        }
      })
      console.log(result)
  }