// =========================
// ПЕРЕХОДЫ
// =========================

const registerButton = document.querySelector(".register");
const loginButton = document.querySelector(".login");


if(registerButton){

    registerButton.onclick = function(){

        window.location.href = "register.html";

    };

}


if(loginButton){

    loginButton.onclick = function(){

        window.location.href = "login.html";

    };

}



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



    if(
        username === savedUsername &&
        password === savedPassword
    ){

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
// ПРОФИЛЬ
// =========================

function loadProfile(){

    let username =
    localStorage.getItem("username");


    let profile =
    document.getElementById("profile");


    if(profile && username){


        profile.innerHTML = `

        <h2>👤 ${username}</h2>

        <p>Статус: 🟢 Онлайн</p>

        `;


    }

}


if(document.getElementById("profile")){

    loadProfile();

}




function openProfile(){

    window.location.href =
    "profile.html";

}



// =========================
// ПОЛЬЗОВАТЕЛИ
// =========================

function loadUsers(){

    let box =
    document.getElementById("users");


    if(!box) return;



    let users =
    JSON.parse(localStorage.getItem("users")) || [];



    box.innerHTML = "";



    users.forEach(function(user){


        let item =
        document.createElement("div");


        item.className =
        "message";



        item.innerHTML = `

        👤 ${user}

        <button onclick="openChat('${user}')">
        Написать
        </button>

        `;



        box.appendChild(item);


    });


}



if(document.getElementById("users")){

    loadUsers();

}




function openUsers(){

    window.location.href =
    "users.html";

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
// ИМЯ СОБЕСЕДНИКА
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
// ОТПРАВКА СООБЩЕНИЯ
// =========================

function sendMessage(){

    let input =
    document.getElementById("text");



    if(!input || input.value === ""){

        return;

    }



    let messages =
    JSON.parse(localStorage.getItem("chats")) || [];



    let message = {

        from:
        localStorage.getItem("username"),


        to:
        localStorage.getItem("chatUser"),


        text:
        input.value,


        time:
        new Date().toLocaleTimeString()

    };