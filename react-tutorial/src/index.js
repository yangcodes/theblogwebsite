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

//setup vars
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/91YZYvWIhgL._AC_UL200_SR200,200_.jpg",
    title: "Apples Never Falllll",
    author: "Lians Moritye",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/71fWy4UWqlL._AC_UL200_SR200,200_.jpg",
    title: "The Seven Husbands of Eve Hugo",
    author: "Taylor Reid",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/61MokdtAKhL._AC_UL200_SR200,200_.jpg",
    title: "What is poo",
    author: "Katie Dyanes",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  //attribute, event Handler
  //onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e.target);
    alert("hello world");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  //const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
