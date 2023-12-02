import { input } from "./input.js";

const lines = input.split("\n");
let sum = 0;

for (const l of lines) {
    const nums = [];

    for (const c of l) {
        if (!isNaN(Number(c))) nums.push(c);
    }

    sum += Number(nums[0] + nums[nums.length - 1]);
}

console.log(sum);
