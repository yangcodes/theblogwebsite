import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//JSX Rules
//return single element
// div/section/article or fragment
//use camelCase for html attribute
//className instead of class
//close every element
//formatting

//nested components, react tools

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title></Title>
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/91YZYvWIhgL._AC_UL200_SR200,200_.jpg"
    alt=""
  />
);

const Title = () => <h1>Apples Never Fall</h1>;

const Author = () => (
  <h2 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    Lians Moritye
  </h2>
);
// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello world")
//   );
// };

ReactDOM.render(<BookList />, document.getElementById("root"));
