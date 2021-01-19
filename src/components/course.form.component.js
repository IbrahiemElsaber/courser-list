import React from "react";

const CourseForm = props => {
	return (
		<form onSubmit={props.submitCourseValue}>
			<input type='text' value={props.currentCourse} onChange={props.updateCourse} />
			<input type='submit' value='Add' className='btn-warning' />
		</form>
	);
};
export default CourseForm;
