import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { rootReducer } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Analytics } from "@vercel/analytics/react";
const store = configureStore({
  reducer: rootReducer,
});

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster />
      <Analytics />
    </BrowserRouter>
  </Provider>
);
