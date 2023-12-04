import { input } from "./input.js";

const lines = input.split("\n");

let sum = 0;

for (const c of lines) {
    const lists = c.match(/(?<=Card +[0-9]+: ).+/)[0].split(" | ");
    const winning = lists[0].trim().split(/ +/);
    const numbers = lists[1].trim().split(/ +/);

    let winningCount = 0;

    for (const n of numbers) {
        if (winning.includes(n)) winningCount++;
    }

    if (winningCount) sum += 2 ** (winningCount - 1);
}

console.log(sum);