import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getBook, deleteBook } from "../data/data";

const Book = () => {
    const navigate = useNavigate();
    const params = useParams();
    const book = getBook(parseInt(params.bookId));

    const location = useLocation();
    if (book) {
        return (
            <main className="fw-bold mt-1 pt-1">
                <h2>
                    قیمت کل : {`${book.amount} تومان`}
                </h2>
                <p>{book.name}</p>
                <p> تاریخ انتشار : {book.due}</p>
                <img style={{ width: "15rem", height: "20rem", borderRadius: "1rem" }} src={book.photo} />
                <br />
                <button
                    onClick={() => {
                        deleteBook(book.number);
                        navigate("/books" + location.search);
                    }}> حذف کتاب </button>
                

            </main>
        );

    } else {
        return (
          <main style={{ padding: "4rem" }} className="fw-bold mt-1 pt-1">
           <p className='fw-bold mt-5' >این کتاب فعلا موجود نیست دوست من .</p>
          </main>
        );
      }
};
export default Book;