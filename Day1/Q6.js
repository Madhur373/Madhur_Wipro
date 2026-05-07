let numbers = [10, 20, 30, 40, 50]
let found = false

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 30) {
        found = true;
        console.log(found);
        console.log("30 is the " + (i + 1) + " element in the array");
        break
    }
}

if (!found) {
    console.log("Not found")
}
