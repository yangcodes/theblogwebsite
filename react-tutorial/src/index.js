//JSX Rules
//return single element
// div/section/article or fragment
//use camelCase for html attribute
//className instead of class
//close every element
//formatting
import React from "react";
import ReactDOM from "react-dom";
//CSS
import "./index.css";
import { data } from "./books";
import Book from "./Book";
import { greeting } from "./testing/testing";

//setup vars

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {data.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
