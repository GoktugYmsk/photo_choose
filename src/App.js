import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Content from "./components/Content";

import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Content />} />
            {/* <Route path="/upload" element={<PhotoUpload />} />
            <Route path="/contest/:id" element={<ContestDetail />} />
            <Route path="/profile" element={<UserProfile />} />

            <Route path="/admin/*" element={<AdminDashboard />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
