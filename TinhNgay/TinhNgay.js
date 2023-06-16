function tinh_ngay() {
    let day = document.getElementById("day").value;
    let message = " ";
    switch (day) {
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':
            document.getElementById("result").innerHTML = "Tháng " + day + " có 31 ngày";
            break;
        case '4':
        case '6':
        case '9':
        case '11':
            document.getElementById("result").innerHTML = "Tháng " + day + " có 30 ngày ";
            break;
        case '2':
            document.getElementById("result").innerHTML = "Tháng " + day + " có 28 hoặc 29 ngày";
            break;
    }
}