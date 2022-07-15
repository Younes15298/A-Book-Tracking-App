import {Link} from "react-router-dom";
import PropTypes from "prop-types"
import Book from "../components/Book";


const Search = ( {convertBookShelf ,addQuery ,error,searchRender ,query ,allData}) => {

    return (
        <>
         <div className="search-books">
          <div className="search-books-bar">
            <Link
              className="close-search"
              to={"/"}
            >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={query}
                onChange={(e)=>addQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">


         { error === "" ? searchRender?.map((book) =>(
                <Book key={book.id} book={book} convertBookShelf={convertBookShelf} allData={allData}/>)) : <h1>{error}</h1>
          }


            </ol>
          </div>
        </div>
        </>
    )
}
Search.prototype ={
    convertBookShelf  : PropTypes.func.isRequired ,
    addQuery :PropTypes.func.isRequired ,
    query:PropTypes.string.isRequired ,
    error:PropTypes.string.isRequired ,
    searchRender:PropTypes.array.isRequired ,
    allData:PropTypes.array.isRequired ,
}
export default Search ; 