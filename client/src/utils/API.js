import axios from "axios";

export default {
  
getBooks: () => axios.get("/api/books"),

  searchBooks: () => axios.get("/search/"),

 
  saveBook: (book) => axios.post("/api/books", book),



  removeBook: (id) => axios.delete("/api/books/" + id),
};