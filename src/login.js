
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#loginBtn").addEventListener("click", login);
});

async function login() {
    const username = document.querySelector("#username").value.trim();
    const password = document.querySelector("#password").value.trim();

    if (!username || !password) {
        document.querySelector("#error").innerHTML = "All fields required.";
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/auth", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();

        if(response.ok) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("uname", data.username2);
            localStorage.setItem("auth", data.auth);
            window.location.replace("index.html");
        }
        else {
            document.querySelector("#error").innerHTML = data.error || "Bad username or password.";
        }
    }
    catch(err) {
        document.querySelector("#error").innerHTML = "Login failed: " + err.message;
    }

}