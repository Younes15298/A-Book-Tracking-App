import Book from "./Book"
const Shelf = ({shelfName , allData ,shelf ,convertBookShelf}) => {

  //each shelf contain books with the same shelf category 
  const booksByCategory = allData.filter((b)=> b.shelf === shelf);
    return(
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelfName}</h2>
          <div className="bookshelf-books">
             <ol className="books-grid">
               {booksByCategory.map((book) =>(
                <Book 
                 key={book.id}
                 book={book}          
                 convertBookShelf={convertBookShelf}
                 shelf={book.shelf}
                 allData={allData}
                />
                 ))
               }                   
            </ol>
          </div>
        </div>
    )
}
export default Shelf;