const Button = ({book,convertBookShelf}) =>{
  const convertShelf =(event)=>{
    event.preventDefault();
    convertBookShelf(book,event.target.value);}


    //check shelfs
   const shelfExist = () =>{
    if(book.shelf){
      return book.shelf;
    }else{
      return "none"
    }
   }

   //highlight shelf category in button
   const lightCategory = (shelfCategory) =>{
    if (book.shelf == shelfCategory){
      return  { backgroundColor:"lightgreen" }
    }
   }
 
    return(
      <div className="book-shelf-changer">
      <select  onChange={convertShelf} value={shelfExist()}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading" style={lightCategory("currentlyReading")} >
          Currently Reading
        </option>
        <option value="wantToRead" style={lightCategory("wantToRead")} >Want to Read</option>
        <option value="read"       style={lightCategory("read")} >Read</option>
        <option value="none"       style={lightCategory("none")}>None</option>
      </select>
    </div>
    )
}
export default Button;