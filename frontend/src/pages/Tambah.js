import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Tambah = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("author", author);
      formData.append("description", description);

      await axios.post("http://localhost:5000/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Reset form fields
      setTitle("");
      setAuthor("");
      setDescription("");

      alert("Buku berhasil ditambahkan!");
      navigate("/daftar");
    } catch (error) {
      console.log(error);
      alert("Terjadi kesalahan saat menambahkan buku.");
    }
  };

  return (
    <Container className="mt-4" style={{ width: "40%" }}>
      <div className="book-form">
        <h2>Formulir Input Buku</h2>
        <Form onSubmit={handleFormSubmit} className="mt-4">
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
            <Link></Link>
            Simpan
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Tambah;
