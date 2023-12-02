import { input } from "./input.js";

const lines = input.split("\n");
let sum = 0;

for (const l of lines) {
    const gameMatch = l.match(/Game (?<id>[0-9]+): (?<results>.+)/);

    let minimumRed = 0;
    let minimumGreen = 0;
    let minimumBlue = 0;

    for (const s of gameMatch.groups.results.split("; ")) {
        const types = s.split(", ");

        for (const t of types) {
            const typeMatch = t.match(/(?<amount>[0-9]+) (?<colour>red|green|blue)/);

            if (typeMatch.groups.colour === "red"
                && Number(typeMatch.groups.amount) > minimumRed
            ) minimumRed = Number(typeMatch.groups.amount);
            else if (typeMatch.groups.colour === "green"
                && Number(typeMatch.groups.amount) > minimumGreen
            ) minimumGreen = Number(typeMatch.groups.amount);
            else if (typeMatch.groups.colour === "blue"
                && Number(typeMatch.groups.amount) > minimumBlue
            ) minimumBlue = Number(typeMatch.groups.amount);
        }

    }

    sum += minimumRed * minimumGreen * minimumBlue;
}

console.log(sum);
