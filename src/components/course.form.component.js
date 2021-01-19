import React from "react";

const CourseForm = props => {
	return (
		<form onSubmit={props.submitCourseValue}>
			<input type='text' onChange={props.updateCourse} />
			<input type='submit' value='submit' />
		</form>
	);
};
export default CourseForm;
