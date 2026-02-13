import { courses } from "./courses";

export function createCourse(newCourse) {
    newCourse.id = courses.length + 1;
    courses.push(newCourse);
}

export function updateCourse(courseFind, updatedCourse) {
    const courseIndex = courses.findIndex(course => course.id === courseFind);
    if (courseIndex !== -1) {
    // copy properties of course to new updatedCourse object
    courses[courseIndex] = { ...courses[courseIndex], ...updatedCourse };
    }
}

export function deleteCourse(courseFind, deletedCourse) {
    const courseIndex = courses.findIndex(course => course.id === courseFind);
    if (courseIndex !== -1) {
        courses.splice(courseIndex, 1);
    }
}