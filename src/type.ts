import { Color, Mark } from "./enums"

 export type Deck = NormalDeck[]
// type Color =  | "♦️" | | 


 export type NormalDeck = {
  color: Color,
  mark: Mark
}