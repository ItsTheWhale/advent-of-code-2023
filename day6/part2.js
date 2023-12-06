import { input } from "./input.js";

const match = input.match(/Time: +(?<time>([0-9]+ *)+)\nDistance: +(?<distance>([0-9]+ *)+)/);

const time = Number(match.groups.time.replaceAll(/ +/g, ""));
const distance = Number(match.groups.distance.replaceAll(/ +/g, ""));

let ways = 0;

for (let i = 0; i < time; i++) {
    if (i * (time - i) > distance) ways++
}

console.log(ways);