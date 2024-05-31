import Request from './Request.jsx';
import './AllRequests.css';

export default function AllRequests(props){

  function liftRequestToRemoveHandler(bookToRemove) {
    props.removeFromRequestListHandler(bookToRemove);
  }
  return(
    <section id="all-requests-list">

      <h2 id="requestsTitle">Requests</h2>

        {/* thisRequest is a function */}
      {props.requestList.map((thisRequest) => 
      <Request 
        liftRequestToRemoveHandler={liftRequestToRemoveHandler}
        book={thisRequest} key={thisRequest.id}></Request>
       )}
    </section>
  );
}

