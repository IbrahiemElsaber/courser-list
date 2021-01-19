import React, { Component, Fragment } from "react";

class CourseList extends Component {
	render() {
		// console.log(`this.props = ${this.props.courseDetails.courseName}`);
		console.log(`CourseList props index = ${this.props.index}`);

		return (
			<Fragment>
				<li className='row'>
					<span className='m-2'>{this.props.courseDetails.courseName}</span>
					<button className='btn-danger m-2 w-25' onClick={this.props.deleteCourse}>
						Delete
					</button>
					<button className='btn-warning m-2 w-25'>Update</button>
				</li>
			</Fragment>
		);
	}
}
export default CourseList;
