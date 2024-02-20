import "./AllTeacher.css";

const AllTeacher = ({ allteacher }) => {
  const { img, name, designation, education, phone, email, shift } = allteacher;
  return (
    <div className="cart">
      <img src={img} alt="" />
      <h6>{name}</h6>
      <p>Designation : {designation} </p>
      <p> Education : {education} </p>
      <p>Shift: {shift}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default AllTeacher;
