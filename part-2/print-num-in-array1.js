// Write a code to print the numbers in the array with commas

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";


for (var i = 0; i < numsArr.length; i++) {
    if (i === numsArr.length - 1) {
        new_string += numsArr[i]
    } else {
        new_string += numsArr[i] + ","
    }
}
console.log(new_string);