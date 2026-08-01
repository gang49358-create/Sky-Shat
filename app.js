// =========================
// РЕГИСТРАЦИЯ
// =========================


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



// =========================
// ВХОД
// =========================


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



window.location.href =
"chat.html";



}else{


document.getElementById("message").innerText =
"Неверный логин или пароль ❌";


}


}



// =========================
// ВЫХОД
// =========================


function logout(){


localStorage.removeItem("online");


window.location.href =
"index.html";


}



// =========================
// ЛЮДИ
// =========================


function openUsers(){

window.location.href =
"users.html";

}




function loadUsers(){


let box =
document.getElementById("users");


if(!box) return;



let users =
JSON.parse(localStorage.getItem("users")) || [];



box.innerHTML = "";



users.forEach(function(user){


let div =
document.createElement("div");



div.className =
"message";



div.innerHTML = `

👤 ${user}

<button onclick="openChat('${user}')">

Написать

</button>

`;



box.appendChild(div);



});


}



if(document.getElementById("users")){

loadUsers();

}





function openChat(user){


localStorage.setItem(
"chatUser",
user
);



window.location.href =
"chat-user.html";


}




// =========================
// ИМЯ ЧАТА
// =========================


function loadChatUser(){


let user =
localStorage.getItem("chatUser");


let title =
document.getElementById("chatName");



if(title && user){

title.innerText =
"Чат с " + user;

}


}



if(document.getElementById("chatName")){

loadChatUser();

}




// =========================
// ОТПРАВКА СООБЩЕНИЙ
// =========================


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


from:
localStorage.getItem("username"),



to:
localStorage.getItem("chatUser"),



text:
input.value,



time:
new Date().toLocaleString()

};



messages.push(newMessage);



localStorage.setItem(
"messages",
JSON.stringify(messages)
);



input.value = "";



showMessages();


}




// =========================
// ПОКАЗ СООБЩЕНИЙ
// =========================


function showMessages(){


let box =
document.getElementById("messages");



if(!box){

return;

}



box.innerHTML = "";



let me =
localStorage.getItem("username");


let user =
localStorage.getItem("chatUser");



let messages =
JSON.parse(
localStorage.getItem("messages")
) || [];



messages.forEach(function(msg){



if(

(msg.from === me && msg.to === user)

||

(msg.from === user && msg.to === me)

){



let div =
document.createElement("div");



div.className =
"message";



div.innerHTML = `

<b>${msg.from}</b>: ${msg.text}

<br>

⏰ ${msg.time}

`;



box.appendChild(div);



}



});



}



if(document.getElementById("messages")){

showMessages();

}
// =========================
// ДОПОЛНИТЕЛЬНЫЕ КНОПКИ
// =========================

function openUsers(){

    window.location.href = "users.html";

}



function openProfile(){

    window.location.href = "profile.html";

}



function logout(){

    localStorage.removeItem("online");

    window.location.href = "index.html";

}