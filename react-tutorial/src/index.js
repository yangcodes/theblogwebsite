import React from "react";
import ReactDOM from "react-dom";

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
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
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

const Author = () => <h1>Lians Moritye</h1>;
// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello world")
//   );
// };

ReactDOM.render(<BookList />, document.getElementById("root"));
