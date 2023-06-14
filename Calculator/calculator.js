function plus() {
    var a = +document.getElementById("number1").value;
    var b = +document.getElementById("number2").value;
    result = a + b;
    document.getElementById("result").innerHTML = "Result : " + result;

}
function minus() {
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    result = a - b;
    document.getElementById("result").innerHTML = "Result : " + result;

}
function multiply() {
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    result = a * b;
    document.getElementById("result").innerHTML = "Result : " + result;

}
function divine() {
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    result = a / b;
    document.getElementById("result").innerHTML = "Result : " + result;

}