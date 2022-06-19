var Color;
(function (Color) {
    Color["spade"] = "\u2660\uFE0F";
    Color["heart"] = "\u2665\uFE0F";
    Color["diamond"] = "\u2666\uFE0F";
    Color["club"] = "\u2663\uFE0F";
})(Color || (Color = {}));
var Mark;
(function (Mark) {
    Mark["A"] = "A";
    Mark["two"] = "2";
    Mark["three"] = "3";
    Mark["four"] = "4";
    Mark["five"] = "5";
    Mark["six"] = "6";
    Mark["seven"] = "7";
    Mark["eight"] = "8";
    Mark["nine"] = "9";
    Mark["ten"] = "10";
    Mark["joker"] = "J";
    Mark["queen"] = "Q";
    Mark["king"] = "K";
})(Mark || (Mark = {}));
function createDeck() {
    const result = [];
    const marks = Object.values(Mark);
    const color = Object.values(Color);
    for (const n of marks) {
        for (const c of color) {
            result.push({
                mark: n,
                color: c
            });
        }
    }
    return result;
}
function pushDeck(dek) {
    let result = '\n';
    dek.forEach((item, i) => {
        let str = item.color + item.mark;
        result += str + '\t';
        if ((i + 1) % 4 === 0) {
            result += '\n';
        }
    });
    console.log(result);
}
const result = createDeck();
pushDeck(result);
