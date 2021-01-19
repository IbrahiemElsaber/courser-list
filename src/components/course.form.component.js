import React from "react";
import "./course.form.component.css";
const CourseForm = props => {
	return (
		<form onSubmit={props.submitCourseValue}>
			<input type='text' value={props.currentCourse} onChange={props.updateCourse} />
			<input type='submit' value='Add Course' className='btn-outline-primary' />
			<br />

			{/*<span className='required'>please enter a new course to add </span>*/}
			<span className={props.displayMessage}>Please enter a new course to add </span>
		</form>
	);
};
export default CourseForm;
