import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://mern-project-api-gamma.vercel.app/books/${id}`).then((res) => {
      setTitle(res.data.title);
      setAuthor(res.data.author);
      setDescription(res.data.description);
    });
  }, [id]); // Tambahkan id sebagai dependency agar efek samping useEffect terpicu saat id berubah

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const updatedBook = {
      title: title,
      author: author,
      description: description,
    };

    axios
      .put(`http://localhost:5000/books/${id}`, updatedBook)
      .then(() => {
        navigate("/daftar");
      })
      .catch((error) => {
        console.log(error);
        // Handle error case, e.g., show error message to user
      });
  };

  return (
    <Container className="mt-4">
      <div className="book-form">
        <h2>Edit Buku</h2>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="formTitle" className="mt-4">
            <Form.Label>Judul</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan judul buku"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formAuthor" className="mt-4">
            <Form.Label>Penulis</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan nama penulis"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formDescription" className="mt-4">
            <Form.Label>Deskripsi</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Masukkan deskripsi buku"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-4">
            Perbarui
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Edit;
