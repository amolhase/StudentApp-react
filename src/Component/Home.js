import "../App.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const defaultValue = {
  rollno: "",
  name: "",
  course: ""
};
function Home({data,sendData,onEditData}) {
  const [studentRecord, setStudentRecord] = useState({rollno:"",name:"",course:""});
  const [error, setError] = useState("");
  const isEditForm = !!Object.keys(data)?.length;

  useEffect(() => {
    setTimeout(() => {
      if (error !== "") setError("");
    }, 5000);
  }, [error]);

  useEffect(() => {
    if (isEditForm) setStudentRecord(data);
  },[data]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setStudentRecord({ ...studentRecord, [id]: value });
  };

  const handleSubmit = () => {
    checkError();
    if (
      Object.values(studentRecord).indexOf(null) > -1 ||
      Object.values(studentRecord).indexOf("") > -1 ||
      isNaN(studentRecord.rollno)
    )
      return null;
    //props.sendData(studentRecord);
    sendData(studentRecord);
    handleReset();
  };

  const editData = () => {
    checkError();
    if (
      Object.values(studentRecord).indexOf(null) > -1 ||
      Object.values(studentRecord).indexOf("") > -1
    )
      return null;
     // console.log("editData studentrecord",studentRecord)
    //props.onEditData(studentRecord);
    onEditData(studentRecord);
    handleReset();
  };

  const handleReset = () => {
    setStudentRecord(defaultValue);
  };

  const checkError = () => {
    if (studentRecord.rollno === "") setError("Enter student roll number");
    else if (isNaN(studentRecord.rollno))
      setError("roll number must be numeric");
    else if (studentRecord.name === "") setError("Enter student name");
    else if (studentRecord.course === "") setError("Enter the student course");
  };

  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-sm-9 mx-auto text-center shadow-lg">
          <h1>Student Management</h1>

          <p className="text-danger">{error}</p>
          <div className="row my-2">
            <div className="col-2">
              <label>Roll Number</label>
            </div>
            <div className="col-9">
              <input
                type="text"
                id="rollno"
                className="form-control"
                placeholder="Enter Roll Number"
                onChange={handleChange}
                value={studentRecord.rollno}
                // onChange={handleInput}
                // value={rollno}
                // style={
                //   studentRecord.rollno.error ? { border: "1px solid red" } : {}
                // }
                // error={studentRecord.rollno.error ? " ":""}
              />
              {/* {
                rollError ? <span>Error</span>:""
               
              } */}
            </div>
          </div>

          <div className="row my-2">
            <div className="col-2">
              <label>Student Name</label>
            </div>
            <div className="col-9">
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter Student Name"
                onChange={handleChange}
                value={studentRecord.name}
              />
            </div>
          </div>

          <div className="row my-2">
            <div className="col-2">
              <label>Student Course</label>
            </div>
            <div className="col-9">
              <input
                type="text"
                id="course"
                className="form-control"
                placeholder="Enter Student Course"
                onChange={handleChange}
                value={studentRecord.course}
              />
            </div>
          </div>

          <div className="row my-2">
            <div 
            className="btn btn-success col-sm-2 mx-5 btnradius"
            onClick={isEditForm ? editData : handleSubmit}>
              {isEditForm ? "Edit" : "Submit"}
            </div>
            <div
              className="btn btn-warning col-sm-2 mx-1 btnradius"
              onClick={handleReset}
            >
              Reset
            </div>
          </div>
        </div>
      </div>
      <Link className="btn btn-primary" to="/studentrec">
        view
      </Link>
    </div>
  );
}

export default Home;
