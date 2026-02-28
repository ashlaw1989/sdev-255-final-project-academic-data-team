import React, { useEffect, useState } from "react";

export default function CourseList() {
    const [courseList, setCourseList] = useState([]);

    useEffect(() => {
        loadCourses();
    }, []);
    
    async function loadCourses() {
        try {
            const response = await fetch("http://localhost:5000/courses");
            const data = await response.json();
            setCourseList(data);
        }
        catch(err) {
            alert("Unable to load courses: " + err.message);
        }
    }

    async function handleDelete(id) {
        try {
            await fetch(`http://localhost:5000/courses/${id}`, {
                method: "DELETE",
            });
            loadCourses();
        }
        catch(err) {
            alert("Unable to delete course: " + err.message);
        }
    };

    return (
        <div>
            <h3>All Courses</h3>
            <ul>
                {courseList.map((course) => (
                    <li key={course.id}>
                        <strong>{course.name}</strong> - {course.subject} {course.course}{" "}
                        <button onClick={() => handleDelete(course.id)}>Delete</button>
                        <a href={`/details/${course.id}`}>Details</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}