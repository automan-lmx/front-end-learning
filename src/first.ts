// 非模块化做法
// type Deck = NormalDeck[]
// // type Color =  | "♦️" | | 

// enum Color {
//   "spade" = "♠️",
//   "heart" = "♥️",
//   "diamond" = "♦️",
//   "club" = "♣️"
// }

// enum Mark {
//   A = "A",
//   two = "2",
//   three = "3",
//   four = "4",
//   five = "5",
//   six = "6",
//   seven = "7",
//   eight = "8",
//   nine = "9",
//   ten = "10",
//   joker = "J",
//   queen = "Q",
//   king = "K"
// }
// type NormalDeck = {
//   color: Color,
//   mark: Mark
// }

// function createDeck (): Deck {
//   const result: Deck = []
//   const marks = Object.values(Mark)
//   const color = Object.values(Color)
//   for(const n of marks) {
//     for (const c of color) {
//       result.push({
//         mark: n,
//         color: c
//       })
//     }
//   }
//   return result
// }

// function pushDeck (dek: Deck){
//   let result = '\n'
//     dek.forEach((item,i)=> {
//       let str = item.color + item.mark
//       result += str + '\t'
//       if ((i+1)% 4 === 0) {
//         result += '\n' 
//       }
//     })
//     console.log(result)
// }
// const result = createDeck()
// pushDeck(result)