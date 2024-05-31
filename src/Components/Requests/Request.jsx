import './Request.css'

export default function Request(props) {

    function clickRemoveRequestHandler() {
    props.liftRequestToRemoveHandler(props.book);
  }
  return (
    <div id="projectList">
    <p>{props.book.title}</p>
    <p>{props.book.author}</p>

      <button id="requestButton" onClick={clickRemoveRequestHandler}>X</button>
      

      {/* book is name you use for AllRequests arrow function */}
    <img id="bookImageRequest" src={props.book.img}></img>

    
    </div>
  )
}

