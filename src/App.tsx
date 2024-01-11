import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { DocumentSelector } from "./components/documents";

function App() {
  return (
    <div className="bg-gray-100 p-16">
      <DocumentSelector />
    </div>
  );
}

export default App;
