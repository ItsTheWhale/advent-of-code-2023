import { input } from "./input.js";

const lines = input.split("\n");

let count = 0;

const cards = [];

for (const i in lines) {
    const lists = lines[i].match(/(?<=Card +[0-9]+: ).+/)[0].split(" | ");
    const winning = lists[0].trim().split(/ +/);
    const numbers = lists[1].trim().split(/ +/);

    let winningCount = 0;

    for (const n of numbers) {
        if (winning.includes(n)) winningCount++;
    }

    cards.push(winningCount);
}

function doCard(n) {
    count++;
    if (cards[n]) {
        for (let i = 1; i < cards[n] + 1; i++) {
            doCard(n + i);
        }
    }
}

for (const c in cards) {
    doCard(Number(c));
}

console.log(count);