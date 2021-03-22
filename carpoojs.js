window.onload = function() {

    //var scrim = document.getElementsByClassName()
    //var tournaments = documen.getElementsByClassNameName()
    //var leguend = docente.getElementsByClassName()
}


$(window).ready(function() {
    $(".w-reg").html("Start competing");

    $(".local").click(function() {
        $(this).css("background-color", "rgb(25, 252, 5)");
    });

    $(".error").css({ "color": "red", "font-size": "4.0rem" });

    // $("").ready(function() {
    //         var div = $(".header__logo);
    //             div.animate({ left: '35%' }, "slow");

    //            });


});


function user() {
    var user = (document.getElementsByClassName("local").value)
    localStorage.setItem("data", user);
}




function checkForm() {
    var nickName = document.getElementById("nickName").value;
    var idpm = document.getElementById("idpm").value;
    var clan = document.getElementById("clanName").value;
    var cell = document.getElementById("cell").value;
    var error1 = document.getElementById("errorNickName")
    var error2 = document.getElementById("errorIdPm")
    var error3 = document.getElementById("errorClan")
    var error4 = document.getElementById("errorCell")

    if (nickName == "") {
        error1.innerHTML = "This value should not be blank. ";
        return false;
    } else if (nickName !== "") {
        error1.innerHTML = ""
    }

    if (idpm == "") {
        error2.innerHTML = "This value should not be blank. ";
        return false;
    } else if (idpm !== "") {
        error2.innerHTML = ""
    }

    if (clan == "") {
        error3.innerHTML = "This value should not be blank. ";
        return false;
    } else if (clan !== "") {
        error3.innerHTML = ""
    }

    if (cell == "") {
        error4.innerHTML = "This value should not be blank. ";
        return false;
    } else if (cell !== "") {
        error4.innerHTML = ""
    }


}


function ktest() {
    var num1 = parseInt(document.getElementById("killstest-kills").value);
    var num2 = parseInt(document.getElementById("killstest-position").value);
    var result = document.getElementById("resultado");


    if (num1 < 0) {
        (num1 = +0)
    }
    if (num2 === 1) {
        (num2 = +20);
    } else if (num2 === 2) {
        (num2 = +14);
    } else if (num2 === 3) {
        (num2 = +10);
    } else if (num2 === 4) {
        (num2 = +7);
    } else if (num2 === 5) {
        (num2 = +6);
    } else if (num2 === 6) {
        (num2 = +5);
    } else if (num2 === 7) {
        (num2 = +4);
    } else if (num2 === 8) {
        (num2 = +3);
    } else if (num2 === 9) {
        (num2 = +2);
    } else if (num2 === 10) {
        (num2 = +1);
    } else if (num2 > 10 || num2 < 0 || num2 === null) {
        (num2 = +0);
    }

    var num1 = parseInt(num1);
    var num2 = parseInt(num2);


    result.innerText = " " + (num1 + num2) + ".";

}