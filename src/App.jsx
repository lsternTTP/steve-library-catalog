import './App.css';
import AllBooks from './Components/Catalog/AllBooks.jsx';
import AllRequests from './Components/Requests/AllRequests.jsx'
import videoBackground from './images/titleVideo.mp4';
import database from './BookData.json';
import {useState} from 'react';


// const allBooks = {
//   book1: {
//     title: "The Key",
//     author: "Whitley Streiber",
//     year: "1998",
//     language: "English",
//     description: "Renown author Whitley Streiber describes incidents of conversations with non-humans",
//     image: "src/images/Pic1.jpg"
//     },
  
//    book2: {
//     title: "Fear of Flying",
//     author: "Erica Jong",
//     year: "1973",
//     language: "English",
//     description: "The groundbreaking book about women's sexuality",
//     image: "src/images/Pic2.jpg"
//   },
  
//   book3: {
//    title: "I Know Why The Caged Bird Sings",
//    author: "Maya Angelou",
//    year: "1969",
//    language: "English",
//    description: "Autobiography of Poet Laureate Maya Angelou",
//    image: "src/images/Pic3.jpg"
//  }
  


export default function App() {
  const [myRequests, setMyRequests] = useState([]);

  const [myBooks, setMyBooks] = useState(database.catalog);
  console.log("books list", myBooks);

  function addToRequestListHandler(bookToAdd) {
    setMyRequests(() => {
      return [...myRequests, bookToAdd];
    });
  }

  function removeFromRequestListHandler(bookToRemove) {
    // filter out the bookToRemove from myRequests
    setMyRequests(() => {
      // filter out bookToRemove
      return myRequests.filter((thisRequest) => thisRequest.id != bookToRemove.id);
    })
  }

  return (
    <main>
       <div id="mainTitle">
        <h1>Library Catalog</h1>
       </div>

    <section id="bookInfo">
      
      <div id="book-search"> 
       <form action="">
        <label id="book-label" htmlFor="book-search">Book Search: 
         </label>
          <input type="text" id="search" name="search"> 
          </input>
          <input type="submit" value="Submit"></input>
       </form>
      </div>

      <video id="titleVideo" autoPlay muted loop> 
       <source src={videoBackground} type="video/mp4">  
           </source>
       </video>
    
    </section>

      <nav>
        <ul>
        <li>Home</li>
          <li>Account</li>
        </ul>
      </nav>   

      <span id="videoCredit">Video by Google DeepMind</span><br></br>
      <span id="pawel" className="credit">Button by Pawel</span>

      
      <AllBooks bookList={myBooks}
        addToRequestListHandler={addToRequestListHandler}>
      </AllBooks>
      <AllRequests requestList={myRequests}
        removeFromRequestListHandler= {removeFromRequestListHandler}>
    </AllRequests>
        
        
    </main>
  )
}