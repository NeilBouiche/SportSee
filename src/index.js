import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
import Header from "./components/Header";
import VerticalHeader from "./components/VerticalHeader";
import Heading from "./components/Heading";
import DataContainer from "./components/DataContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <VerticalHeader />
    <Heading />
    <DataContainer />
  </React.StrictMode>
);
