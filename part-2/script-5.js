// Write a code to replace the array value — If the index is even, replace it with ‘even’.

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (var i = 0; i <= numsArr.length; i++) {

    if (i % 2 === 0) {
        numsArr[i] = "even"
    }
}
console.log(numsArr);