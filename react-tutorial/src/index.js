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
const author = "Lians Moritye";
const title = "Apples Never Falllll";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/91YZYvWIhgL._AC_UL200_SR200,200_.jpg";
function BookList() {
  return (
    <section className="booklist">
      <Book job="woman" />
      <Book title="superhero" number={22} />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
