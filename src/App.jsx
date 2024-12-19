import React from "react";
import { Navbar } from "./components/common/Navbar";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { MessageSuccessPage } from "./pages/MessageSuccessPage";

function App() {
  const contactData = useSelector((state) => state.contactData);
  const contactDataValues = Object.values(contactData)[0];

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        {contactDataValues && (
          <Route
            path="/message-sent/success"
            element={<MessageSuccessPage />}
          />
        )}
      </Routes>
    </>
  );
}

export default App;
