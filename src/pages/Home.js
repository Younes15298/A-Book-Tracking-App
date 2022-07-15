import {Link} from "react-router-dom";
import Shelf from "../components/Shelfs";
import PropTypes from "prop-types"

 

const Home = ({  allData ,convertBookShelf }) =>{


    return (
        <div className="app">
          <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  < Shelf  shelfName  = {"Currently Reading"} allData={allData}  shelf="currentlyReading"  convertBookShelf={convertBookShelf} />
                  < Shelf  shelfName  = {"Want to Read" }     allData={allData}  shelf="wantToRead"        convertBookShelf={convertBookShelf}/>
                  < Shelf   shelfName = {"Read"}              allData={allData}  shelf="read"              convertBookShelf={convertBookShelf}/>
                </div>
              </div>
              <div className="open-search" >
                <Link  to="/search">Add a book</Link>
              </div>
          </div>
       
      </div>
    )
}

Home.prototype ={
    allData:PropTypes.array.isRequired ,
    convertBookShelf:PropTypes.func.isRequired ,
   
}
export default Home;