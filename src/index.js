import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
import Header from "./components/Header";
import VerticalHeader from "./components/VerticalHeader";
import Heading from "./components/Heading";
import ActivityBarGraph from "./components/ActivityBarGraph";
import SessionsLengthGraph from "./components/SessionsLengthGraph";
import PerfoGraph from "./components/PerfoGraph";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <VerticalHeader />
    <Heading />
    <ActivityBarGraph />
    <SessionsLengthGraph />
    <PerfoGraph />
  </React.StrictMode>
);
