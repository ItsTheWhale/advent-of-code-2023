import { input } from "./input.js";

const list = input
    .split('\n')
    .map(l => l.split(' '));

const hands = [];

for (const l of list) {
    const grouped = Object.groupBy(l[0].split(''), a => a);
    const groupedArr = [];
    for (const k of Object.keys(grouped)) {
        groupedArr.push(grouped[k]);
    }
    const sortedStr = groupedArr.sort((a, b) => b.length - a.length).flat().join('');

    let type = 1;

    if (sortedStr.match(/AAAAA|KKKKK|QQQQQ|JJJJJ|TTTTT|99999|88888|77777|66666|55555|44444|33333|22222/)) type = 7;
    else if (sortedStr.match(/(AAAA|KKKK|QQQQ|JJJJ|TTTT|9999|8888|7777|6666|5555|4444|3333|2222)[AKQJT98765432]/)) type = 6;
    else if (sortedStr.match(/(AAA|KKK|QQQ|JJJ|TTT|999|888|777|666|555|444|333|222)(AA|KK|QQ|JJ|TT|99|88|77|66|55|44|33|22)/)) type = 5;
    else if (sortedStr.match(/AAA|KKK|QQQ|JJJ|TTT|999|888|777|666|555|444|333|222/)) type = 4;
    else if (sortedStr.match(/(AA|KK|QQ|JJ|TT|99|88|77|66|55|44|33|22)(AA|KK|QQ|JJ|TT|99|88|77|66|55|44|33|22)[AKQJT98765432]/)) type = 3;
    else if (sortedStr.match(/AA|KK|QQ|JJ|TT|99|88|77|66|55|44|33|22/)) type = 2;

    hands.push({
        type,
        chars: l[0].split(''),
        bid: Number(l[1])
    });
}

function getCardRank(c) {
    switch (c) {
        case 'A': return 13;
        case 'K': return 12;
        case 'Q': return 11;
        case 'J': return 10;
        case 'T': return 9;
        case '9': return 8;
        case '8': return 7;
        case '7': return 6;
        case '6': return 5;
        case '5': return 4;
        case '4': return 3;
        case '3': return 2;
        case '2': return 1;
    }
}

const sorted = hands.sort((a, b) => {
    if (a.type > b.type) return 1;
    else if (a.type < b.type) return -1;
    else {
        for (let i = 0; i < 5; i++) {
            const aRank = getCardRank(a.chars[i]);
            const bRank = getCardRank(b.chars[i]);
            if (aRank > bRank) return 1;
            else if (aRank < bRank) return -1;
        }
    }
});

let winnings = 0;

for (let i = 0; i < sorted.length; i++) {
    winnings += sorted[i].bid * (i + 1);
}

console.log(winnings);