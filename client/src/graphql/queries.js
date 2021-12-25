import { gql } from "@apollo/client";

export const getBooksQuery = gql`
  query GetBooks {
    books {
      name
      id
    }
  }
`;

export const getAuthorsQuery = gql`
  query getAuthors {
    authors {
      name
      id
    }
  }
`;

export const addBookMutation=gql`
  mutation {
    addBook(name:"",genre:"",authorid:""){
      name
      id
    }
  }
  `
