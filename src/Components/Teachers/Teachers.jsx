import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Teacher from "../Teacher/Teacher";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const navigate = useNavigate();

  const handleAllTeachers = () => {
    navigate("/all/teachers");
  };
  console.log(teachers);

  useEffect(() => {
    fetch("teacher.json")
      .then((res) => res.json())
      .then((data) => setTeachers(data.slice(0, 4)));
  }, []);
  return (
    <div className="teachers-container">
      <h2 className="teachers-title">Our Teachers</h2>
      <div className="cart-group">
        {teachers.map((teacher) => (
          <Teacher key={teacher.id} teacher={teacher} />
        ))}
      </div>
      <button onClick={handleAllTeachers} className="allTeacherBtn">
        All Teachers
      </button>
    </div>
  );
};

export default Teachers;
