import "./Book.css";

const Book = (props) => {
  console.log(props.books);
  const { semester, books } = props.books;
  return (
    <div className="bookCart">
      <h2 className="semesterName"> Semester : {semester}</h2>
      <ol className="bookLIst">
        {books.map((book, idx) => (
          <li key={idx}>{book}</li>
        ))}
      </ol>
    </div>
  );
};

export default Book;
