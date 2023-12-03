import { input } from "./input.js";

const lines = input.split("\n");
const chars = lines.map(l => l.split(''));
let stars = [];

let sum = 0;

for (let y in lines) {
    if (!stars[y]) stars[y] = [];
}

for (let y in lines) {
    y = Number(y);

    const numberRegex = /[0-9]+/g;

    let numberMatch;

    while (numberMatch = numberRegex.exec(lines[y])) {
        for (let x = numberMatch.index; x < numberMatch.index + numberMatch[0].length; x++) {
            if (y > 0) {
                if (chars[y - 1][x] === '*') {
                    if (!stars[y - 1][x]) stars[y - 1][x] = {
                        adjacent: 1,
                        numbers: [numberMatch]
                    };
                    else {
                        stars[y - 1][x].adjacent++;
                        stars[y - 1][x].numbers.push(numberMatch);
                    }
                    break;
                } else if (x > 0 && chars[y - 1][x - 1] === '*') {
                    if (!stars[y - 1][x - 1]) stars[y - 1][x - 1] = {
                        adjacent: 1,
                        numbers: [numberMatch]
                    };
                    else {
                        stars[y - 1][x - 1].adjacent++;
                        stars[y - 1][x - 1].numbers.push(numberMatch);
                    }
                    break;
                } else if (x < chars[y - 1].length - 2 && chars[y - 1][x + 1] === '*') {
                    if (!stars[y - 1][x + 1]) stars[y - 1][x + 1] = {
                        adjacent: 1,
                        numbers: [numberMatch]
                    };
                    else {
                        stars[y - 1][x + 1].adjacent++;
                        stars[y - 1][x + 1].numbers.push(numberMatch);
                    }
                    break;
                }
            }
            if (x > 0 && chars[y][x - 1] === '*') {
                if (!stars[y][x - 1]) stars[y][x - 1] = {
                    adjacent: 1,
                    numbers: [numberMatch]
                };
                else {
                    stars[y][x - 1].adjacent++;
                    stars[y][x - 1].numbers.push(numberMatch);
                }
                break;
            }
            if (x < chars[y].length - 2 && chars[y][x + 1] === '*') {
                if (!stars[y][x + 1]) stars[y][x + 1] = {
                    adjacent: 1,
                    numbers: [numberMatch]
                };
                else {
                    stars[y][x + 1].adjacent++;
                    stars[y][x + 1].numbers.push(numberMatch);
                }
                break;
            }
            if (y < chars.length - 2) {
                if (chars[y + 1][x] === '*') {
                    if (!stars[y + 1][x]) stars[y + 1][x] = {
                        adjacent: 1,
                        numbers: [numberMatch]
                    };
                    else {
                        stars[y + 1][x].adjacent++;
                        stars[y + 1][x].numbers.push(numberMatch);
                    }
                    break;
                } else if (x > 0 && chars[y + 1][x - 1] === '*') {
                    if (!stars[y + 1][x - 1]) stars[y + 1][x - 1] = {
                        adjacent: 1,
                        numbers: [numberMatch]
                    };
                    else {
                        stars[y + 1][x - 1].adjacent++;
                        stars[y + 1][x - 1].numbers.push(numberMatch);
                    }
                    break;
                } else if (x < chars[y + 1].length - 2 && chars[y + 1][x + 1] === '*') {
                    if (!stars[y + 1][x + 1]) stars[y + 1][x + 1] = {
                        adjacent: 1,
                        numbers: [numberMatch]
                    };
                    else {
                        stars[y + 1][x + 1].adjacent++;
                        stars[y + 1][x + 1].numbers.push(numberMatch);
                    }
                    break;
                }
            }
        }
    }
}

for (const l of stars) {
    for (const s of l) {
        if (s && s.adjacent === 2) sum += Number(s.numbers[0]) * Number(s.numbers[1]);
    }
}

console.log(sum);