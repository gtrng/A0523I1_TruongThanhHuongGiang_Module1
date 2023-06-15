function BMI() {
    let w = document.getElementById("weight").value;
    let h = document.getElementById("height").value;
    if (h > 3) {
        h = h / 100;
    }
    let bmi = w / (h ^ 2);
    if (bmi < 18.5) {
        document.getElementById("interpretation").innerHTML = "Underweight";
    } else if (18.5 <= bmi && bmi < 25.0) {
        document.getElementById("interpretation").innerHTML = "Normal";
    } else if (25.0 <= bmi && bmi < 30.0) {
        document.getElementById("interpretation").innerHTML = "Overweight";
    } else if (30.0 <= bmi) {
        document.getElementById("interpretation").innerHTML = "Obese";
    }
    document.getElementById("result").innerHTML = "BMI" + bmi;

}