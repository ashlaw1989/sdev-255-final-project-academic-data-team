import React, { useState } from "react";
import { courses } from "./courses";
import { deleteCourse } from "./courseFunctions";



export default function CourseList() {
    const [courseList, setCourseList] = useState(courses);

    const handleDelete = (id) => {
        try {
            deleteCourse(id);
            setCourseList([...courses]);
        }
        catch(err) {
            alert(err.message)
        }
    }

    return (
        <div>
            <h3>All Courses</h3>
            <ul>
                {courseList.map((course) => (
                    <li key={course.id} style={{ marginBottom: "10px" }}>
                        <strong>{course.name}</strong> - {course.subject} {course.course}{" "}
                        <button onClick={() => handleDelete(course.id)} style={{ marginLeft: "10px" }}>Delete</button>
                        <button style={{ marginLeft: "10px" }}><a href={`/details/${course.id}`}>Details</a></button>
                    </li>
                ))}
            </ul>
        </div>
    );
}