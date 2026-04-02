import "../App.css";
import "../index.css"
import { useNavigate } from "react-router-dom";

function StudentCard({ student, onDelete, onEdit }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="top">
        <span className="clgname">CMRIT</span>
        <span className="idd">STUDENT ID</span>
        <span className="verify">Verified id</span>
      </div>
      <div className="inter">
         <div className="image"><img src={student.img} alt="" /></div>
         <div>
            <h2 onClick={() => navigate(`/profile/${student.rollno}`, { state: student })}>
            {student.name}
            <h6>UNDERGRADUATE  STUDENT</h6>
            </h2>
            <p className="roll">STUDENT ID: {student.rollno}
              <h4>COURSE/MAJOR:Bachelor of computer science</h4>
              <h6>COLLGE:Engineering & Technology</h6>
            </p>
            <p>Class: {student.class}
              <h4>ACADEMIC YEAR:2023-24</h4>
            </p>
            <button onClick={() => onEdit(student)}>Edit</button>
            <button onClick={() => onDelete(student.rollno)}>Delete</button>
          </div>
       </div>
    </div>
  );
}

export default StudentCard;