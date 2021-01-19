import React, { Component, Fragment } from "react";
import "./course.list.component.css";

class CourseList extends Component {
	render() {
		// console.log(`this.props = ${this.props.courseDetails.courseName}`);
		console.log(`CourseList props index = ${this.props.index}`);

		return (
			<Fragment>
				<li className='mt-2 bg-light'>
					<span className='strong'>{this.props.courseDetails.courseName}</span>
					<div className='row'>
						<button className='btn-danger m-2 w-25' onClick={() => this.props.deleteCourse(this.props.index)}>
							{" "}
							{/* arrow function to invoke the handler */}
							Delete
						</button>
						<button className='btn-warning m-2 w-25'>Update</button>{" "}
					</div>
				</li>
			</Fragment>
		);
	}
}
export default CourseList;
