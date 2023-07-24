import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const Daftar = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("https://mern-project-api-gamma.vercel.app/books");
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    // Kirim permintaan delete ke endpoint API untuk menghapus buku berdasarkan ID
    axios
      .delete(`https://mern-project-api-gamma.vercel.app/books/${id}`)
      .then((response) => {
        // Berhasil menghapus buku
        console.log("Buku berhasil dihapus");

        fetchBooks(); // Memperbarui daftar buku setelah penghapusan
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        // Handle error case, e.g., show error message to user
      });
  };

  return (
    <div className="mt-4">
      <Container className="mt-4">
        <div>
          <h2 className="text-left">Daftar Buku</h2>
          <div className="text-right mt-4 mb-4">
            <Link as={Link} to="/tambah">
              <Button className="btn-success">Tambah Buku</Button>
            </Link>
          </div>
        </div>
        <div className="row">
          {books.map((book, index) => (
            <div className="col-sm-4" key={book.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={book.image} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.author}</Card.Text>
                  <Card.Text>{book.description}</Card.Text>
                  <Row>
                    <Col>
                      <Link to={`/edit/${book._id}`}>
                        <Button>Edit Buku</Button>
                      </Link>
                    </Col>
                    <Col>
                      <Button
                        className="btn-danger"
                        onClick={() => handleDelete(book._id)}
                      >
                        Delete
                      </Button>
                      {/* <span className="" style={{ justifyContent: "right" }}>
                        <IoIosHeartEmpty
                          style={{ width: "40px", height: "40px" }}
                        />
                      </span> */}
                    </Col>
                  </Row>
                  <div className="d-flex"></div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Daftar;
