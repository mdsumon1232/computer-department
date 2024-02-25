import { useLoaderData } from "react-router-dom";
import AllTeacher from "./../../Components/AllTeacher/AllTeacher";
import "./AllTeachers.css";

const AllTeachers = () => {
  const allTeachers = useLoaderData();

  return (
    <div className="AllTeachersContainer">
      <h1 className="allTeacherTitle"> Our Teachers</h1>
      <div className="cart-group">
        {allTeachers.map((allteacher) => (
          <AllTeacher key={allteacher.id} allteacher={allteacher} />
        ))}
      </div>
    </div>
  );
};

export default AllTeachers;
