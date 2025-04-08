import React from "react";
import { Routes, Route } from "react-router-dom";

// Import pages/components
import Home from './pages/Home';  // No need to add .jsx, just use the relative path

import CreateBook from "./pages/CreateBooks";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";

const App = () => {
  return (
    <Routes>
      {/* Route for Home page */}
      <Route path="/" element={<Home />} />

      {/* Route for CreateBook page */}
      <Route path="/books/create" element={<CreateBook />} />

      {/* Route for ShowBook details page */}
      <Route path="/books/details/:id" element={<ShowBook />} />

      {/* Route for EditBook page */}
      <Route path="/books/edit/:id" element={<EditBook />} />

      {/* Route for DeleteBook page */}
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
