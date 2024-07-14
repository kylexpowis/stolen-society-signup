import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import ThankYouPage from "./ThankYouPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/thankyoupage" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
};

export default App;
