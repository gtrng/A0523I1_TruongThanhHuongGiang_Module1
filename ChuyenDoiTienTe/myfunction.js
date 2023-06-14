function myfunction() {
    var amount = document.getElementById("value").value;
    var f = document.getElementById("from").value;
    var t = document.getElementById("to").value;
    if (f == "dong" && t == "usd") {
        result = amount / 23000;
    }
    if (f == "usd" && t == "dong") {
        result = amount * 23000;
    }
    document.getElementById("result").innerHTML = "Result : " + result;
}