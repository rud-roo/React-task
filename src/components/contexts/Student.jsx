import { createContext, useReducer, useState } from "react";


export const StudentContext = createContext();

const initialState = {
<<<<<<< Updated upstream
  studentName: "",
  students: [],
  editMode: false,
  editableStudent: null,
}

const studentReducer = (state, action) => {
  switch(action.type){
    case "CHANGE_STUDENT_NAME": {
      return {
        ...state,
        studentName: action.payload
      }
    }
    case "CREATE_STUDENT": {
      const newStudent = {
        id: Date.now() + "",
        name: state.studentName,
        isPresent: undefined,
      }
      return {
        ...state,
        studentName: "",
        students: [...state.students, newStudent],
      }
    }
    case "REMOVE_STUDENT": {
      return {
        ...state,
        students: state.students.filter(
          student => student.id !== action.payload,
        )
      }
    }
    case "EDIT_STUDENT": {
      return {
        ...state,
        studentName: action.payload.name,
        editMode: true,
        editableStudent: action.payload,
      }
    }
    case "UPDATE_STUDENT": {
      const updatedStudentList = state.students.map((student)=>{
        if(student.id === state.editableStudent.id){
          return {...student, name: state.studentName}
        }
        return student
      })

      return {
        ...state,
        studentName: "",
        students: updatedStudentList,
        editMode: false,
        editableStudent: null
      }
    }
    case "UPDATE_PRESENT_STATUS": {
      // if(action.payload.isPresent!==undefined){
      //   return alert(
      //     `Already in the ${
      //       action.payload.isPresent? "present list" : "absent list"
      //     }`
      //   )
      // }
      const updatedStudentList = state.students.map((student)=>{
        if(student.id === action.payload.id){
          return{
            ...student,
            isPresent: action.payload.isPresent,
          }
        }
        return student;
      })

      return {
        ...state,
        students: updatedStudentList,
      }
    }
    default:
      return state;
  }
}
=======
	studentName: "",
	students: [],
	editMode: false,
	editableStudent: null,
};
const studentReducer = (state, action) => {

	switch (action.type) {
		case "CHANGE_STUDENT_NAME": {
			return {
				...state,
				studentName: action.payload,
			};
		}
		case "CREATE_STUDENT": {
			const newStudent = {
				id: Date.now() + "",
				name: state.studentName,
				isPresent: undefined,
			};

			return {
				...state,
				students: [...state.students, newStudent],
				studentName: "",
			};
		}
		case "REMOVE_STUDENT": {
			return {
				...state,
				students: state.students.filter(
					(item) => item.id !== action.payload,
				),
			};
		}
		case "EDIT_STUDENT": {
			return {
				...state,
				editMode: true,
				editableStudent: action.payload,
				studentName: action.payload.name,
			};
		}
		case "UPDATE_STUDENT": {
			const updatedStudentList = state.students.map((student) => {
				if (student.id === state.editableStudent.id) {
					return { ...student, name: state.studentName };
				}
				return student;
			});

			return {
				...state,
				students: updatedStudentList,
				editMode: false,
				editableStudent: null,
				studentName: "",
			};
		}
		case "UPDATE_PRESENT_STATUS": {
			const updatedStudentList = state.students.map((student) => {
				if (student.id === action.payload.id) {
					return { ...student, isPresent: action.payload.isPresent };
				}
				return student;
			});

			return {
				...state,
				students: updatedStudentList,
			};
		}
		default: {
			return state;
		}
	}
};
>>>>>>> Stashed changes

const StudentProvider = (props) => {
	const [studentStates, dispatchStudentAction] = useReducer(studentReducer, initialState);

<<<<<<< Updated upstream
  const [studentStates, dispatchStudentAction] = useReducer(studentReducer, initialState);


  const submitHandler = (event) => {
    event.preventDefault();
    if(studentStates.studentName.trim()===""){
      return alert("Please enter a valid name.");
    }
    studentStates.editMode 
    ? dispatchStudentAction({type: "UPDATE_STUDENT"}) 
    : dispatchStudentAction({type: "CREATE_STUDENT"});
  }

  
  const ctxValue = {
    studentStates,
    dispatchStudentAction,
    submitHandler,
  }

  return(
    <StudentContext.Provider value={ctxValue}>
      {props.children}
    </StudentContext.Provider>
  )
}
=======
	const submitHandler = (event) => {
		event.preventDefault();
		if (studentStates.studentName.trim() === "")
			return alert(`Please provide a valid name`);

		studentStates.editMode
			? dispatchStudentAction({ type: "UPDATE_STUDENT" })
			: dispatchStudentAction({ type: "CREATE_STUDENT" });
	};

	const ctxValue = {
		studentStates,
		dispatchStudentAction,
		submitHandler,
	};
	return (
		<StudentContext.Provider value={ctxValue}>
			{props.children}
		</StudentContext.Provider>
	);
};
>>>>>>> Stashed changes

export default StudentProvider;