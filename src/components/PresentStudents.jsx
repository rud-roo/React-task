

const PresentStudents = (props) => {

    return(
        <div className="present-student">
            <h2>Present Student</h2>
            <ul className='list'>
                {props.students.filter((student)=> student.isPresent===true).map((student) => (
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


export default PresentStudents;