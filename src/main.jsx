import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import AuthContextProvider, {
  AuthContext,
} from "./Components/AuthContext/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </ChakraProvider>
);
