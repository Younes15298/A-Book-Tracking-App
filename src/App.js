import "./App.css";
import { useState ,useEffect } from "react";
import { Route, Routes} from "react-router-dom";
import Search from "./pages/Search";
import Home from "./pages/Home";
import * as BooksApi from "./BooksAPI" ; 


function App() {
  const [books,setBooks]                = useState([]);
  const [query, setQuery]               = useState("");
  const [error,setError]                = useState("");
  const [searchRender, setSearchRender] = useState([])
  const addQuery =(query) =>{
    setQuery(query);
  }

  //get data that contain shelfs
  useEffect(()=>{
    const getBooks = async()=>{
      const res = await BooksApi.getAll();
      setBooks(res);
    }
    getBooks();
  },[]);


    //update shelfs
const convertBookShelf = async(book,shelf)=>{
   await BooksApi.update( book, shelf);
   const res = await BooksApi.getAll();
   setBooks(res);
  }





    //search
useEffect(()=>{
  if(query.length !== 0){
    BooksApi.search(query).then(data=>{
      if(data.error){
        setSearchRender([])
        setError(`There is no book named :${query}`)
      }else{
        setSearchRender(data)
        setError("")       
      }
    }) 
  }else{
    setSearchRender([]);
  }
  },[query])


  return (
    <Routes>
      <Route exact   path="/"         element={ <Home allData={books}   convertBookShelf={convertBookShelf} /> } />
      <Route         path="/search"   element={ <Search  allData={books}   convertBookShelf={convertBookShelf}  addQuery={addQuery} error ={error} searchRender={searchRender} query={query}/> } />
    </Routes>
  );
}
export default App;
