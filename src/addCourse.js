document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#addBtn").addEventListener("click", addCourse);
});

async function addCourse() {
    const name = document.querySelector("#name").value
    const subject = document.querySelector("#subject").value
    const course = document.querySelector("#course").value
    const description = document.querySelector("#description").value
    const credits = document.querySelector("#credits").value

    if(!name || !subject || !course || !description || !credits) {
        document.querySelector("#error").innerHTML = "All fields required";
        return;
    }

    const token = localStorage.getItem("token");

    if(!token) {
        document.querySelector("#error").innerHTML = "You must be logged in.";
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/courses", {
            method: "POST",
            headers: { "Content-Type": "application/json", "x-auth": token },
            body: JSON.stringify({
                name,
                subject,
                course: Number(course),
                description,
                credits: Number(credits)
            })
        });

        const data = await response.json();
        if(response.ok) {
            document.querySelector("#error").innerHTML = "Course added.";
            document.querySelector("form").reset();
        }
        else {
            document.querySelector("#error").innerHTML = data.error || data.message;
        }
    }
    catch(err) {
        document.querySelector("#error").innerHTML = "Unable to add course: " + err.message;
    }   
}