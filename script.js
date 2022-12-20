let password = document.getElementById("user_password");
let password2 = document.getElementById("user_password2");

let check = function () {
    if (document.getElementById("user_password").value != document.getElementById("user_password2").value) {
        document.getElementById("user_password").style.border = "0.5px solid red";
        document.getElementById("user_password2").style.border = "0.5px solid red";
        document.querySelector(".message").innerHTML = "* Passwords don't match."
    } else if (document.getElementById("user_password").value == document.getElementById("user_password2").value) {
        document.getElementById("user_password").style.border = "0.5px solid green";
        document.getElementById("user_password2").style.border = "0.5px solid green";
        document.querySelector(".message").innerHTML = ""
    }
}
