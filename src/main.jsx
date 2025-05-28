import React from "react";
import ReactDOM from "react-dom/client";
import {Application} from "./app/application";
import "./styling/home.css"
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BrowserRouter><Application /></BrowserRouter>);