document.addEventListener("DOMContentLoaded", function() {
    const logoutLink = document.querySelector("#logoutLink");

    if(logoutLink) {
        logoutLink.addEventListener("click", function(e) {
            e.preventDefault();

            localStorage.removeItem("token");
            localStorage.removeItem("uname");
            localStorage.removeItem("auth");
            window.location.replace("login.html");
        });
    }
})