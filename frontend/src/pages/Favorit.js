import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Favorit() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk status login
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/data")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const books = [
    {
      id: 1,
      image: "book1.jpg",
      title: "Book 1",
      author: "Author 1",
      description: "Description 1",
    },
    {
      id: 2,
      title: "Book 2",
      author: "Author 2",
      description: "Description 2",
    },
    {
      id: 3,
      title: "Book 3",
      author: "Author 3",
      description: "Description 3",
    },
  ];

  return (
    <div>
      <Container className="mt-4">
        {isLoggedIn ? (
          <div>
            {isLoggedIn && <span>Nama Pengguna</span>}
            <h1>Daftar Buku</h1>
            <div style={{ display: "flex" }}>
              <div>
                <h1>Data from MySQL</h1>
                <ul>
                  {data.map((item) => (
                    <li key={item.id}>{item.nama}</li>
                  ))}
                </ul>
              </div>
              {books.map((book) => (
                <Card key={book.id} style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Img variant="top" src={book.image} />
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {book.author}
                    </Card.Subtitle>
                    <Card.Text>{book.description}</Card.Text>
                    <Button variant="primary">Read More</Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h3>Silahkan Login Terlebih Dahulu</h3>
            <Link as={Link} to="/login">
              <Button>Login</Button>
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Favorit;
