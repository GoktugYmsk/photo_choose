import React from "react";
import { Route, Routes } from "react-router-dom";

import Content from "./components/Content";

import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route>
          <Route path="/" element={<Content />} />
          {/* <Route path="/upload" element={<PhotoUpload />} />
            <Route path="/contest/:id" element={<ContestDetail />} />
            <Route path="/profile" element={<UserProfile />} />

            <Route path="/admin/*" element={<AdminDashboard />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
