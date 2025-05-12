import React, { useEffect, useState } from "react";
import { Navbar } from "./components/common/Navbar";
import { Home } from "./pages/Home";
import { BlogSection } from "./components/core/BlogSection";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { MessageSuccessPage } from "./pages/MessageSuccessPage";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const contactData = useSelector((state) => state.contactData);
  const contactDataValues = Object.values(contactData)[0];
  const [movetotop, setMovetotop] = useState("scale-0");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setMovetotop("scale-1 ");
      } else {
        setMovetotop("scale-0");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <a href="#home">
        <div
          className={`fixed z-50 bottom-10 right-7 text-2xl bg-blue-500 p-4  rounded-full ${movetotop} transition-all ease-linear`}
        >
          <FaArrowUp className="text-white" />
        </div>
      </a>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogSection />} />
        <Route path="*" element={<Home />} />
        {contactDataValues && (
          <Route
            path="/message-sent/success"
            element={<MessageSuccessPage />}
          />
        )}
      </Routes>
    </div>
  );
}

export default App;
