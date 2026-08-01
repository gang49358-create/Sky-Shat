// =====================
// ПЕРЕХОДЫ
// =====================

function openRegister(){

    window.location.href = "register.html";

}


function openLogin(){

    window.location.href = "login.html";

}



// =====================
// РЕГИСТРАЦИЯ
// =====================

function registerUser(){


let username =
document.getElementById("username").value;


let password =
document.getElementById("password").value;



if(username === "" || password === ""){

document.getElementById("message").innerText =
"Заполни все поля ❌";

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



let users =
JSON.parse(localStorage.getItem("users")) || [];



if(!users.includes(username)){

users.push(username);

}



localStorage.setItem(
"users",
JSON.stringify(users)
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
username === savedUsername &&
password === savedPassword
){


window.location.href =
"chat.html";


}

else{


document.getElementById("message").innerText =
"Неверный логин или пароль ❌";


}


}




// =====================
// ЧАТ
// =====================


function sendMessage(){


let input =
document.getElementById("text");



if(!input || input.value.trim() === ""){

return;

}



let messages =
JSON.parse(
localStorage.getItem("messages")
) || [];



let newMessage = {


user:
localStorage.getItem("username"),


text:
input.value,


time:
new Date().toLocaleTimeString([], {
hour:"2-digit",
minute:"2-digit"
})


};



messages.push(newMessage);



localStorage.setItem(
"messages",
JSON.stringify(messages)
);



input.value = "";


showMessages();


}




function showMessages(){


let box =
document.getElementById("messages");



if(!box){

return;

}



box.innerHTML = "";



let myName =
localStorage.getItem("username");



let messages =
JSON.parse(
localStorage.getItem("messages")
) || [];



messages.forEach(function(msg){



let div =
document.createElement("div");



if(msg.user === myName){


div.className =
"message sent";


}
else{


div.className =
"message received";


}



div.innerHTML = `

${msg.text}

<br>

<small>${msg.time}</small>

`;



box.appendChild(div);



});


}



if(document.getElementById("messages")){

showMessages();

}




// =====================
// ЛЮДИ
// =====================


function openUsers(){

window.location.href =
"users.html";

}




// =====================
// ПРОФИЛЬ
// =====================


function openProfile(){

window.location.href =
"profile.html";

}




// =====================
// ВЫХОД
// =====================


function logout(){

localStorage.removeItem("online");

window.location.href =
"index.html";

}