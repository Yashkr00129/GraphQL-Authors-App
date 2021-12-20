import React from "react";
import { gql, useQuery } from "@apollo/client";

const getBooksQuery = gql`
  query GetBooks {
    books {
      name
      id
      genre
      author {
        name
        age
      }
    }
  }
`;

function Booklist() {
  const { data, loading } = useQuery(getBooksQuery);
  console.log(data);
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
Booklist.propTypes = {};

export default Booklist;
