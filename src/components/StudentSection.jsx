import AllStudents from './AllStudents'
import PresentStudents from './PresentStudents'
import AbsentStudents from './AbsentStudents'

const StudentSection = (props) => {
    const {setStudentName, students, setStudents, setEditMode, setEditableStudent} = props

    const toggleHandler = (student) => {
		const updatedStudents = students.map((item) => {
			if(student.id === item.id) {
				return {...item, isPresent: !item.isPresent};
			}
			return item;
		})

		setStudents(updatedStudents);
	}

    return(
        <div className="student-section">
				<AllStudents
                    setStudentName = {setStudentName}
                    students = {students}
                    setStudents = {setStudents}
                    setEditMode = {setEditMode}
                    setEditableStudent = {setEditableStudent}
                />

				<PresentStudents
                    students = {students}
                    toggleHandler = {toggleHandler}
                />

				<AbsentStudents
                    students = {students}
                    toggleHandler = {toggleHandler}
                />
			</div>
    )
}


export default StudentSection;