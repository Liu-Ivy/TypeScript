function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
var combineValues = add;
console.log(combineValues(20, 10));
printResult(add(20, 40));
