// =====================
// ПЕРЕХОДЫ
// =====================


function openRegister(){

window.location.href="register.html";

}



function openLogin(){

window.location.href="login.html";

}



// =====================
// РЕГИСТРАЦИЯ
// =====================


function registerUser(){


let username =
document.getElementById("username").value;


let password =
document.getElementById("password").value;



if(username==="" || password===""){


document.getElementById("message").innerText =
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



document.getElementById("message").innerText =
"Аккаунт создан ✅";


}





// =====================
// ВХОД
// =====================


function loginUser(){


let username =
document.getElementById("loginUsername").value;



let password =
document.getElementById("loginPassword").value;



let savedUsername =
localStorage.getItem("username");



let savedPassword =
localStorage.getItem("password");



if(
username===savedUsername &&
password===savedPassword
){


window.location.href="chat.html";


}

else{


document.getElementById("message").innerText =
"Неверный логин или пароль ❌";


}


}