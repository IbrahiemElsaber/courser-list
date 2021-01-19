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
		// console.log("input course =  ", e.target.value);
		this.setState({
			current: e.target.value,
		});
	};
	handleAddCourse = e => {
		e.preventDefault();
		console.log(` current: ${this.state.current}`);
		// alert(this.state.current);
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

				<CourseForm updateCourse={this.handleCourseUpdate} submitCourseValue={this.handleAddCourse} />

				<div>
					Courses names are : <ul>{coursesList}</ul>
				</div>
			</div>
		);
	}
}

export default App;
