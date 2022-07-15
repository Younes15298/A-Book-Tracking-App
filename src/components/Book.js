import Button from "./button";
const Book = ({convertBookShelf,book,shelf ,allData}) =>{
  
  //same books id have same shelf category
  allData.forEach((books) => {
    if(book.id === books.id){
      book.shelf = books.shelf
    }
   });


//check thumbnails
  const thumbnailExist = () =>{
if(book.imageLinks){
  return`url(${book.imageLinks.thumbnail})`; 
}else{
  return ""; 
}
  } 


    return(
                     <li >
                          <div className="book">
                              <div className="book-top">
                                  <div
                                    className="book-cover"style={{ width: 128, height: 192, backgroundImage:thumbnailExist()}}></div>                   
                                     <Button book={book} shelf={shelf} convertBookShelf={convertBookShelf} />
                              </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.publisher}</div>
                          </div>
                      </li>  
    )
}

export default Book;