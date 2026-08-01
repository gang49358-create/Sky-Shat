const registerButton = document.querySelector(".register");
const loginButton = document.querySelector(".login");


// кнопка регистрации на главной странице

if(registerButton){

registerButton.onclick = function(){

window.location.href="register.html";

}

}


// кнопка входа на главной странице

if(loginButton){

loginButton.onclick = function(){

window.location.href="login.html";

}

}


// регистрация

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



// вход

function loginUser(){


let username =
document.getElementById("loginUsername").value;


let password =
document.getElementById("loginPassword").value;



let savedUsername =
localStorage.getItem("username");


let savedPassword =
localStorage.getItem("password");



if(username === savedUsername &&
password === savedPassword){


localStorage.setItem(
"online",
"true"
);


window.location.href="chat.html";


}

else{


document.getElementById("message").innerText =
"Неверный логин или пароль ❌";


}


}
.chat{

width:350px;
height:600px;

background:#1f1f1f;

border-radius:20px;

display:flex;
flex-direction:column;

overflow:hidden;

}



.chat-header{

padding:20px;

background:#4d8cff;

font-size:22px;

text-align:center;

}



.messages{

flex:1;

padding:15px;

overflow:auto;

}



.message{

background:#4d8cff;

padding:10px;

border-radius:15px;

margin-bottom:10px;

width:max-content;

}



.send-box{

display:flex;

padding:10px;

}



.send-box input{

flex:1;

}



.send-box button{

width:60px;

}
function logout(){

localStorage.removeItem("online");

window.location.href="index.html";

}