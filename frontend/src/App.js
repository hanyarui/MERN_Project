import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Bar from "./components/Bar";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
// import Profile from "./pages/auth/Profile";
import Home from "./pages/Home";
import Daftar from "./pages/Daftar";
import Favorit from "./pages/Favorit";
import Pengingat from "./pages/Pengingat";
import Tambah from "./pages/Tambah";
import Edit from "./pages/Edit";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/books")
      .then((response) => setBooks(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div>
        <BrowserRouter>
          <Bar />
          <Routes>
            <Route>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/daftar"
                element={<Daftar books={books} />}
                render={() => (loggedIn ? <Daftar /> : <Login />)}
              />
              <Route path="/favorit" element={<Favorit />} />
              <Route path="/pengingat" element={<Pengingat />} />
              {/* <Route path="/profile" element={<Profile />} /> */}
              <Route path="/tambah" element={<Tambah />} />
              <Route path="/edit/:id" element={<Edit />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
