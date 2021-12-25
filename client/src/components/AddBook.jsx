import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { getAuthorsQuery, addBookMutation } from "../graphql/queries";

function AddBook() {
  const { data, loading } = useQuery(getAuthorsQuery);
  const [formData, setFormData] = useState({
    bookName: "",
    genre: "",
    author: 0,
  });
  
  const mutateFunction = useMutation(addBookMutation);
  console.log(mutateFunction)
  const { bookName, genre, author } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ bookName, genre, author });
  };

  if (loading) return <h1>Loading...</h1>;
  return (
    <form id={"add-book"} onSubmit={(e) => onSubmit(e)}>
      <div className={"field"}>
        <label>Book Name:</label>
        <input
          type="text"
          onChange={(e) => onChange(e)}
          name="bookName"
          value={bookName}
        />
      </div>
      <div className={"field"}>
        <label>Genre:</label>
        <input
          type="text"
          onChange={(e) => onChange(e)}
          name="genre"
          value={genre}
        />
      </div>
      <div className={"field"}>
        <label>Author:</label>
        <select value={author} name="author" onChange={(e) => onChange(e)}>
          <option>Select Author</option>
          {data.authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
      </div>
      <button>Add Author</button>
    </form>
  );
}
export default AddBook;
