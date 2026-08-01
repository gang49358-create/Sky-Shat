const register = document.querySelector(".register");
const login = document.querySelector(".login");



if(register){

register.onclick = function(){

window.location.href="register.html";

}

}



function registerUser(){


let username = document.getElementById("username").value;

let password = document.getElementById("password").value;



if(username==="" || password===""){

document.getElementById("message").innerText=
"Заполни все поля";

return;

}



localStorage.setItem(
"username",
username
);


localStorage.setItem(
"password",
password
);



document.getElementById("message").innerText=
"Аккаунт создан ✅";


}