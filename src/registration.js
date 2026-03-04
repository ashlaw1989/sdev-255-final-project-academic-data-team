document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#registerBtn").addEventListener("click", registerUser);
})

async function registerUser() {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const role = document.querySelector("#role").value;

    if(!username || !password || !role) {
        document.querySelector("#error").innerHTML = "All fields required.";
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password, role })
        });

        if(response.ok) {
            const data = await response.json();
            localStorage.setItem("token", data.token);
            localStorage.setItem("uname", data.username2);
            localStorage.setItem("auth", data.auth);
            window.location.replace("/index.html");
        }
        else {
            const error = await response.json();
            document.querySelector("#error").innerHTML = error.error;
        }
    }
    catch(err) {
        document.querySelector("#error").innerHTML = "Registration failed: " + err.message;
    }
}