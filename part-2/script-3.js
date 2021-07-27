// Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)

var new_string = "";

for (var i = 11; i > 0; i--) {

    if (i === 1) {
        new_string += i
    } else {
        new_string += (i + " ")
    }
}
console.log(new_string);