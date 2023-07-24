import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./routes/BookRoute.js";
import userRoute from "./routes/UserRoute.js";

const app = express();
app.use(cors(
  {
    origin: [""],
    methods: ["POST", "GET"],
    credentials: true
  }
));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Menghubungkan ke MongoDB
mongoose.connect(
  "mongodb+srv://dharuaulia1:N1nj4869@cluster0.wziddca.mongodb.net/buku?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));

// Mengatur rute untuk buku

app.use(bookRoute);
app.use(userRoute);

// Mengatur server untuk mendengarkan pada port tertentu
app.listen(5000, () => {
  console.log("Server berjalan di port 5000");
});
