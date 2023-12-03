import { input } from "./input.js";

const lines = input.split("\n");
const chars = lines.map(l => l.split(''));

let sum = 0;

const symbolRegex = /[^\.0-9]/;

for (let y in lines) {
    y = Number(y);

    const numberRegex = /[0-9]+/g;

    let numberMatch;

    while (numberMatch = numberRegex.exec(lines[y])) {
        console.log(numberMatch[0])
        let isPart = false;
        for (let x = numberMatch.index; x < numberMatch.index + numberMatch[0].length; x++) {
            if (
                (y > 0 && (chars[y - 1][x].match(symbolRegex)
                    || (x > 0 && chars[y - 1][x - 1].match(symbolRegex))
                    || (x < chars[y - 1].length - 2 && chars[y - 1][x + 1].match(symbolRegex)))
                )
                || (x > 0 && chars[y][x - 1].match(symbolRegex))
                || (x < chars[y].length - 2 && chars[y][x + 1].match(symbolRegex))
                || (y < chars.length - 2 && (chars[y + 1][x].match(symbolRegex)
                    || (x > 0 && chars[y + 1][x - 1].match(symbolRegex))
                    || (x < chars[y + 1].length - 2 && chars[y + 1][x + 1].match(symbolRegex)))
                )
            ) {
                isPart = true;
                break;
            }
        }

        if (isPart) sum += Number(numberMatch);
    }
}

console.log(sum);