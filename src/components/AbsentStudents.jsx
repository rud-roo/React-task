

const AbsentStudents = (props) => {

    return(
        <div className="absent-student">
            <h2>Absent Student</h2>
            <ul className='list'>
                {props.students.filter((student)=> student.isPresent===false).map((student) => (
                    <li className='list-item' key={student.id}>
                        <span>{student.name}</span>
                        <button onClick={() => props.toggleHandler(student)}>
                            Accidentally added
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default AbsentStudents;