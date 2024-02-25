import { useLoaderData } from "react-router-dom";
import Book from "../../Components/Book/Book";
import "./BookList.css";

const BookList = () => {
  const allBooks = useLoaderData();
  return (
    <div className="bookContainer">
      <h1>Book List 22 Providan </h1>
      <div className="bookCartGroup">
        {allBooks.map((books) => (
          <Book key={books.id} books={books} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
