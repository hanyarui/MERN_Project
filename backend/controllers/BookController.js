import Book from "../models/BookModel.js";

// Mendapatkan semua buku
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Membuat buku baru
const createBook = async (req, res) => {
  const { title, author, description } = req.body;

  try {
    const newBook = new Book({
      title,
      author,
      description,
    });

    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Mendapatkan buku berdasarkan ID
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: "Buku tidak ditemukan" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Mengupdate buku berdasarkan ID
const updateBook = async (req, res) => {
  const { title, author, description } = req.body;

  try {
    const book = await Book.findById(req.params.id);
    if (book) {
      book.title = title;
      book.author = author;
      book.description = description;

      const updatedBook = await book.save();
      res.json(updatedBook);
    } else {
      res.status(404).json({ message: "Buku tidak ditemukan" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Menghapus buku berdasarkan ID
const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (book) {
      await book.remove();
      res.json({ message: "Buku berhasil dihapus" });
    } else {
      res.status(404).json({ message: "Buku tidak ditemukan" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { getAllBooks, createBook, getBookById, updateBook, deleteBook };
