import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_BOOKS_QUERY = gql`
  query getBooksQuery {
    book(id: 2) {
      name
      id
    }
  }
`;

const BookList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS_QUERY);
  return (
    <div>
      <ul id="book-list">
        <li>Book Name</li>
      </ul>
    </div>
  );
};

export default BookList;
