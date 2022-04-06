import React from 'react';
import {Link} from 'react-router-dom';

const StudentRec = (props) => {
    const studentData = props.studentData;
    //console.log("in student record data === ",studentData);

    const deleteData = e => {
        props.deleteData(e.target.value);
    }

    const editStudent = student => {
        props.handleEditStudent(student);
    }

    return (
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col-sm-9 text-center mx-5 shadow-lg">
                    <h1 className="text-success">Student Details</h1>
                </div>
            </div>

            <table border="2px solid black" className="mt-3 mx-5 col-9">
                <tbody>
                <tr>
                    <th>Roll Number</th>
                    <th>Student Name</th>
                    <th>Student Course</th>
                    <th>Action</th>
                </tr>
                {
                    studentData.length ? studentData.map((student,i) => {
                        return (
                          <tr key={i}>
                            <td>{student.rollno}</td>
                            <td>{student.name}</td>
                            <td>{student.course}</td>
                            <td>
                              <Link to="/"
                                className='btn btn-warning'
                                onClick={() => editStudent(student)}
                                value={student}
                              >
                                Edit
                              </Link>
                              <button
                                className="btn btn-danger"
                                onClick={deleteData}
                                value={student.rollno}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        );
                    })
                    :
                    "No Records Available"
                }
                </tbody>
            </table>
            <Link className="btn btn-primary" to="/">Home</Link>
       </div>
    )
}

export default StudentRec;