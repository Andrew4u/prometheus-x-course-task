import React, { useContext, useEffect, useState } from "react";
import "./book-list.css";
import { Link } from "react-router-dom";
import { BooksContext } from "../contexts/BooksContextProvider";

function BookList() {
  const [searchText, setSearchText] = useState("");
  const [filterByPrice, setFilterByPrice] = useState("all");
  const books = useContext(BooksContext);

  const filterBooksByPrice = (book) => {
    switch (filterByPrice) {
      case "all":
        return true;
      case "0-15":
        return book.price > 0 && book.price < 15;
      case "15-30":
        return book.price >= 15 && book.price < 30;
      case "30+":
        return book.price >= 30;
      default:
        return true;
    }
  };

  const filteredBooks = books
    .filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    )
    .filter(filterBooksByPrice);

  return (
    <main className="book-list">
      <section className="search">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by book name"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn bg-body-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Price
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => setFilterByPrice("all")}
              >
                All
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => setFilterByPrice("0-15")}
              >
                0 - 15
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => setFilterByPrice("15-30")}
              >
                15 - 30
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => setFilterByPrice("30+")}
              >
                30 +
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="books">
        <div className="books">
          {/* відображення тільки відфільтрованих книг */}
          {filteredBooks.map((book) => (
            <div className="book-in-books" key={book.id}>
              <img
                src={
                  book.image ||
                  process.env.PUBLIC_URL + "/images/imageNotFound.png"
                }
                alt={book.title}
                className="cart-size"
              />
              {/* додано перевірку на довжину назви та заміну трикрапкою, якщо потрібно */}
              <h4 className="cart-size">
                {book.title.length > 24
                  ? book.title.substring(0, 24) + "..."
                  : book.title}
              </h4>
              <h5 className="cart-size">by {book.author}</h5>
              <div className="button-view cart-size">
                <h6>{book.price} USD </h6>
                <Link to={`/specific-book/${book.id}`}>
                  <button
                    type="button"
                    className="view btn btn-outline-info"
                    // onClick={() => handleViewClick(book.id)}
                  >
                    View
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default BookList;
