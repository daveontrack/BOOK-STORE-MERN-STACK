import mongoose from "mongoose";
import { Book } from "./models/Book"; // Assuming your model is stored in 'models/Book.js'

// MongoDB connection URI - make sure to replace it with your actual MongoDB URI
const mongoURI = "mongodb://localhost:27017/book-store-mern"; // Use your MongoDB connection string

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    createBooks();
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const createBooks = async () => {
  try {
    const books = [
      { title: "1984", author: "George Orwell", publishYear: 1949 },
      { title: "Brave New World", author: "Aldous Huxley", publishYear: 1932 },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publishYear: 1960,
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publishYear: 1925,
      },
      { title: "Moby-Dick", author: "Herman Melville", publishYear: 1851 },
      { title: "War and Peace", author: "Leo Tolstoy", publishYear: 1869 },
    ];

    // Insert multiple books into the database
    const result = await Book.insertMany(books);
    console.log("Books inserted:", result);

    // Close the connection after inserting
    mongoose.connection.close();
  } catch (error) {
    console.error("Error inserting books:", error);
    mongoose.connection.close();
  }
};
