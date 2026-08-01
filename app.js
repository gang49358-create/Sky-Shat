// Кнопки на главной странице

const registerButton = document.querySelector(".register");
const loginButton = document.querySelector(".login");


if (registerButton) {

    registerButton.onclick = function () {
        window.location.href = "register.html";
    };

}


if (loginButton) {

    loginButton.onclick = function () {
        window.location.href = "login.html";
    };

}



// Регистрация пользователя

function registerUser() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    if (username === "" || password === "") {

        document.getElementById("message").innerText =
            "Заполни все поля";

        return;

    }


    // сохраняем текущего пользователя

    localStorage.setItem(
        "username",
        username
    );


    localStorage.setItem(
        "password",
        password
    );


    // сохраняем список пользователей

    let users =
        JSON.parse(localStorage.getItem("users")) || [];


    if (!users.includes(username)) {

        users.push(username);

    }


    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );


    document.getElementById("message").innerText =
        "Аккаунт создан ✅";

}



// Вход пользователя

function loginUser() {


    let username =
        document.getElementById("loginUsername").value;


    let password =
        document.getElementById("loginPassword").value;



    let savedUsername =
        localStorage.getItem("username");


    let savedPassword =
        localStorage.getItem("password");



    if (
        username === savedUsername &&
        password === savedPassword
    ) {


        localStorage.setItem(
            "online",
            "true"
        );


        window.location.href =
            "chat.html";


    } else {


        document.getElementById("message").innerText =
            "Неверный логин или пароль ❌";


    }

}



// Выход

function logout() {

    localStorage.removeItem("online");

    window.location.href =
        "index.html";

}



// Профиль

function loadProfile() {


    let username =
        localStorage.getItem("username");


    let profile =
        document.getElementById("profile");


    if (profile && username) {


        profile.innerHTML = `

        <h2>👤 ${username}</h2>

        <p>Статус: 🟢 Онлайн</p>

        `;

    }

}


function goChat() {

    window.location.href =
        "chat.html";

}



if (document.getElementById("profile")) {

    loadProfile();

}



// Открыть профиль

function openProfile() {

    window.location.href =
        "profile.html";

}



// Список пользователей

function loadUsers() {


    let users =
        JSON.parse(localStorage.getItem("users")) || [];


    let box =
        document.getElementById("users");


    if (!box) return;



    users.forEach(function(user) {


        let item =
            document.createElement("div");


        item.className =
            "message";


        item.innerHTML =
            "👤 " + user;


        box.appendChild(item);


    });


}



if (document.getElementById("users")) {

    loadUsers();

}



// Открыть пользователей

function openUsers() {

    window.location.href =
        "users.html";

}



// Отправка сообщения в чате

function sendMessage() {


    let input =
        document.getElementById("text");


    if (!input || input.value === "") {

        return;

    }


    let message =
        document.createElement("div");


    message.className =
        "message";


    message.innerText =
        input.value;


    document
        .getElementById("messages")
        .appendChild(message);


    input.value = "";

}