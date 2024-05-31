import "./Book.css";


export default function Book(props) {
  function clickRequestHandler() {
    props.liftBookToAppHandler(props.book);
  }

  return (
    <div className="book-card">
      <img id="bookImage" src={props.book.img}></img>
      <h2>{props.book.title}</h2>
      <h3>{props.book.author}</h3>
      <p>Published {props.book.yearPublished} in {props.book.language}</p>
      <p>{props.book.description}</p>

      <button id="requestBookButton" onClick={clickRequestHandler}>Request           Book</button>
    </div>
  )
}