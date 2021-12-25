import React from "react";
import {  useQuery } from "@apollo/client";
import {getBooksQuery} from "../graphql/queries"


function Booklist() {
  const { data, loading } = useQuery(getBooksQuery);
  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <ul id={"book-list"}>
        {data.books.map((book) => {
          return <li key={book.id}>{book.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Booklist;
