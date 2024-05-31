import './AllBooks.css';
import Book from './Book.jsx';


export default function AllBooks(props) {
  function liftBookToAppHandler(bookToAdd) {
    props.addToRequestListHandler(bookToAdd);
  }
  
  return (
    <section id="secOne">
      <div id="all-books-list">
      {props.bookList.map((thisBook) => <Book 
      liftBookToAppHandler={liftBookToAppHandler} key={thisBook.id} book={thisBook}>book={thisBook} key={thisBook.id}></Book>
                         )}
        </div>
    </section>
  )
};