import { input } from "./input.js";

const lines = input.split("\n");
let sum = 0;

for (const l of lines) {
    const gameMatch = l.match(/Game (?<id>[0-9]+): (?<results>.+)/);
    let impossible = false;

    for (const s of gameMatch.groups.results.split("; ")) {
        const types = s.split(", ");

        for (const t of types) {
            const typeMatch = t.match(/(?<amount>[0-9]+) (?<colour>red|green|blue)/);

            if (
                (typeMatch.groups.colour === "red"
                    && Number(typeMatch.groups.amount) > 12)
                || (typeMatch.groups.colour === "green"
                    && Number(typeMatch.groups.amount) > 13)
                || (typeMatch.groups.colour === "blue"
                    && Number(typeMatch.groups.amount) > 14)
            ) {
                impossible = true;
                console.log(s)
                break;
            }
        }

        if (impossible) break;
    }

    if (!impossible) sum += Number(gameMatch.groups.id);
}

console.log(sum);
