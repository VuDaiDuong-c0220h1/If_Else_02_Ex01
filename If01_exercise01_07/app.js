function showMess01 (){
    let a = parseInt(document.getElementById("number1").value);
    let b = parseInt(document.getElementById("number2").value);
    if (a % b === 0) {
        document.getElementById("result01").innerHTML = "a có chia hết cho b.";
    } else {
        document.getElementById("result01").innerHTML = "a không chia hết cho b.";
    }
}

function showMess02() {
    let age = parseInt(document.getElementById("number3").value);
    if (age > 15) {
        document.getElementById("result02").innerHTML = "Đủ tuổi học lớp 10.";
    } else {
        document.getElementById("result02").innerHTML = "Không đủ tuổi học lớp 10.";
    }

}

function showMess03() {
    let num = parseInt(document.getElementById("number4").value);
    if (num > 0) {
        document.getElementById("result03").innerHTML = "Số " + num + " là số lớn hơn 0";
    } else if (num < 0) {
        document.getElementById("result03").innerHTML = "Số " + num + " là số nhỏ hơn 0";
    } else {
        document.getElementById("result03").innerHTML = "Số 0";
    }

}

function showMess04() {
    let num1 = parseInt(document.getElementById("number5").value);
    let num2 = parseInt(document.getElementById("number6").value);
    let num3 = parseInt(document.getElementById("number7").value);
    if (num1 > num2) {
        if (num1 > num3) {
            document.getElementById("result04").innerHTML = "Số lớn nhất là: " + num1 ;
        } else {
            document.getElementById("result04").innerHTML = "Số lớn nhất là: " + num3 ;
        }
    } else if (num2 < num3) {
        document.getElementById("result04").innerHTML = "Số lớn nhất là: " + num3 ;
    } else {
        document.getElementById("result04").innerHTML = "Số lớn nhất là: " + num2 ;
    }
}

function showMess06() {
    let sales = parseInt(document.getElementById("number11").value);
    let rose = 0;
    if (sales <= 10000000) {
        rose = sales * 0.1;
        document.getElementById("result06").innerHTML = "Hoa hồng của bạn là: " + rose;
    } else if (sales > 50000000) {
        rose = sales * 0.2;
        document.getElementById("result06").innerHTML = "Hoa hồng của bạn là: " + rose;
    } else {
        rose = sales * 0.15;
        document.getElementById("result06").innerHTML = "Hoa hồng của bạn là: " + rose;
    }
}