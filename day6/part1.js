import { input } from "./input.js";

const match = input.match(/Time: +(?<times>([0-9]+ *)+)\nDistance: +(?<distances>([0-9]+ *)+)/);

const times = match.groups.times.split(/ +/).map(n => Number(n));
const distances = match.groups.distances.split(/ +/).map(n => Number(n));

let product = 1;

for (const i in times) {
    let ways = 0;

    for (let j = 0; j < times[i]; j++) {
        if (j * (times[i] - j) > distances[i]) ways++
    }

    product *= ways;
}

console.log(product)