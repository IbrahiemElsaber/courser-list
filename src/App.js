// import React from "react";
import React, { Component } from "react";
import CourseForm from "./components/course.form.component";
import CourseList from "./components/course.list.component";

class App extends Component {
	state = {
		courses: [{ courseName: "HTML" }, { courseName: "Js" }, { courseName: "CSS" }],
	};

	render() {
		const { courses } = this.state;
		const coursesList = courses.map((course, index) => {
			console.log(`course: ${course.courseName}`);
			return <CourseList key={Math.random() * 5} courseDetails={course} />;
		});
		return (
			<div className='App'>
				<h1>App Component</h1>
				<hr />
				<CourseForm />
				<hr />

				<div>
					Courses names are : <ul>{coursesList}</ul>
				</div>
			</div>
		);
	}
}

export default App;
