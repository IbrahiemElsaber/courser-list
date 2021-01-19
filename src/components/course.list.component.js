import React, { Component, Fragment } from "react";

class CourseList extends Component {
	render() {
		// console.log(`this.props = ${this.props.courseDetails.courseName}`);
		// console.log(this.props);
		return (
			<Fragment>
				<li>{this.props.courseDetails.courseName}</li>
			</Fragment>
		);
	}
}
export default CourseList;
