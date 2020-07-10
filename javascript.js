function convert() {
    let money = document.getElementById("amount").value;
    let currency1 = document.getElementById("select1").value;
    let currency2 = document.getElementById("select2").value;
    let conver_result = money * currency2 / currency1;
    document.getElementById("result").innerHTML = "Result: " + parseFloat(conver_result).toFixed(2);
}