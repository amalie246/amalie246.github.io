import React from "react";
import {Route, Routes, Link} from "react-router-dom";
import {About} from "../components/about";
import {Home} from "../components/home";
import {Projects} from "../components/projects";
import {Contact} from "../components/contact";

export function Application(){
    return (
        <div>
            <div id={"header"}>
                <h1>Amalie Nilsen</h1>
                <p className={"header-text"}>Portfolio</p>
                {/*<p className={"header-text"}>text text text</p>*/}
            </div>
            <div className={"line"}></div>

            <nav className={"navbar"}>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/projects"}>Projects</Link>
                <Link to={"/contact"}>Contact</Link>
            </nav>
            <div className={"line"}></div>

            <Routes>
                <Route path={"/"} element={<Home />}/>
                <Route path={"/about"} element={<About/>}></Route>
                <Route path={"/projects"} element={<Projects />}></Route>
                <Route path={"/contact"} element={<Contact />}></Route>
            </Routes>
        </div>
    )
}