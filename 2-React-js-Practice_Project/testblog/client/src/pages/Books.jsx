import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3307/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:3307/books/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <header id="header" className="header">
        <div className="bannerimg"></div>
        <div className="text">
          <h1>YarnDelite Shop</h1>
          <p>
            شما میتونید هر کدام از عروسک ها ار با سلیقه خود سفارش بدهید 
          </p>
        </div>
      </header>
      <div className="center">
        {/* <aside className="aside" id="aside">
          <div className="cards">
            <div className="card">1</div>
            <div className="card">2</div>
            <div className="card">3</div>
          </div>
        </aside> */}
        <div className="books">
          {books.map((book) => (
            <div className="book" key={book.id}>
              <div className="bookitem1">
                {book.cover && <img src={book.cover} alt="cover of book" />}
                <h2>{book.title}</h2>
                <button
                  className="delete"
                  onClick={() => handleDelete(book.id)}
                >
                  Delete
                </button>
                <button className="update">
                  <Link to={`/update/${book.id}`}>Update</Link>
                </button>
              </div>
              <div className="bookitem2">
                <p>{book.desc}</p>
                <span>تومان {book.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bottomfixed">
        <Link className="link" to="/add">
          <button className="addbooks">Add new book</button>
        </Link>
      </div>
    </div>
  );
};

export default Books;
