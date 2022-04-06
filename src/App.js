import './App.css';
import Home from './Component/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import StudentRec from './Component/StudentRec';
import {useState} from 'react';

function App() {
  const [studentData, setStudentData] = useState([]);
  let [studRec, setStudRec] = useState({});

  const sendData = data => {
    studentData.push(data);
    alert("Student record added");
  }

  const handleDelete = id => {
    
    let newData = studentData.filter((data) => {
      return data.rollno !== id;
    })
    //console.log(" in handledelete data ===",newData);
    setStudentData(newData);

  }

  const editStudent = student => {
    setStudRec(student);
  }

  function handleEditData(studRec) {
    //console.log("App handleEdit",studRec);
    let newData = studentData.map((student) => {
      let obj = { ...student };
      if (student.rollno === studRec.rollno) obj = studRec;
      return obj;
    });
    setStudentData(newData);

  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home sendData={sendData}
      onEditData={handleEditData}
      data={studRec}
      />}/>
      <Route path="/studentrec" element={<StudentRec 
      studentData={studentData} 
      deleteData={handleDelete}
      handleEditStudent={editStudent}
      />}/>
      <Route path="*" element={<h1>404 Page Not Found</h1>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
