import React, { Component, Fragment } from "react";
import "./course.list.component.css";

class CourseList extends Component {
	//render added course function
	renderCourseItem = () => {
		return (
			<li className='mt-2 bg-light'>
				<span className='strong'>{this.props.courseDetails.courseName}</span>
				<div className='row'>
					<button className='btn-danger m-2 w-25' onClick={() => this.props.deleteCourse(this.props.index)}>
						{/* arrow function to invoke the handler */}
						Delete
					</button>
					<button className='btn-warning m-2 w-25'>Update</button>
				</div>
			</li>
		);
	};
	render() {
		return <Fragment>{this.renderCourseItem()}</Fragment>;
	}
}
export default CourseList;
