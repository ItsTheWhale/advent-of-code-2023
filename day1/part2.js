import { input } from "./input.js";

const lines = input.split("\n");
let sum = 0;

for (const l of lines) {
    const chars = l.split('');
    const nums = [];

    const charLength = chars.length;

    for (let i = 0; i < charLength; i++) {
        const match = chars.join('').match(/^([0-9]|one|two|three|four|five|six|seven|eight|nine)/);
        if (match) {
            if (!isNaN(Number(match[0]))) nums.push(match[0]);
            else switch (match[0]) {
                case "one":
                    nums.push('1');
                    break;
                case "two":
                    nums.push('2');
                    break;
                case "three":
                    nums.push('3');
                    break;
                case "four":
                    nums.push('4');
                    break;
                case "five":
                    nums.push('5');
                    break;
                case "six":
                    nums.push('6');
                    break;
                case "seven":
                    nums.push('7');
                    break;
                case "eight":
                    nums.push('8');
                    break;
                case "nine":
                    nums.push('9');
            }
        }
        chars.shift();
    }
    
    sum += Number(nums[0] + nums[nums.length - 1]);
}

console.log(sum);
