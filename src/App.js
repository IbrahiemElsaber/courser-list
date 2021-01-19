// import React from "react";
import React, { Component } from "react";
// import "./App.css";
import CourseForm from "./components/course.form.component";
import CourseList from "./components/course.list.component";

class App extends Component {
	state = {
		courses: [{ courseName: "HTML" }, { courseName: "Js" }, { courseName: "CSS" }],
		current: "",
	};

	handleCourseUpdate = e => {
		this.setState({
			current: e.target.value,
		});
	};

	handleAddCourse = e => {
		e.preventDefault();
		let currentCourse = this.state.current;
		let courses = this.state.courses;
		courses.push({ courseName: currentCourse });
		this.setState({
			courses,
			current: "" /*set current to empty string to handle input value to equal empty string after submit */,
		});
	};
	render() {
		const { courses } = this.state;
		const coursesList = courses.map((course, index) => {
			// console.log(`course: ${course.courseName}`);
			return <CourseList key={Math.random() * 5} courseDetails={course} />;
		});
		return (
			<div className='container'>
				<h1>App Component</h1>

				<CourseForm
					currentCourse={this.state.current} /*send current as props to make input value = " " */
					updateCourse={this.handleCourseUpdate}
					submitCourseValue={this.handleAddCourse}
				/>

				<div>
					Courses names are : <ul>{coursesList}</ul>
				</div>
			</div>
		);
	}
}

export default App;
