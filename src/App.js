// import React from "react";
import React, { Component } from "react";
// import "./App.css";
import CourseForm from "./components/course.form.component";
import CourseList from "./components/course.list.component";

class App extends Component {
	state = {
		// courses: [],
		courses: [{ courseName: "HTML" }, { courseName: "Js" }, { courseName: "CSS" }],
		current: "",
	};

	//handle update course
	handleCourseUpdate = e => {
		this.setState({
			current: e.target.value,
		});
	};

	//handle add course
	handleAddCourse = e => {
		e.preventDefault();
		let currentCourse = this.state.current;
		let courses = this.state.courses;
		courses.push({ courseName: currentCourse }); //update courses array after adding new course object
		this.setState({
			courses,
			current: "" /*set current to empty string to handle input value to equal empty string after submit */,
		});
	};

	//handle delete course
	handleDeleteCourse = index => {
		console.log(`index= ${index}`);
		let courses = this.state.courses;
		courses.splice(index, 1);
		this.setState({
			courses,
		});
	};

	render() {
		const { courses } = this.state;
		const coursesList = courses.map((course, index) => {
			return <CourseList courseDetails={course} key={index} index={index} deleteCourse={this.handleDeleteCourse} />;
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
