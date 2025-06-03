import React from "react";
import { Link, useLocation } from "react-router-dom";
import about from "../images/about.png";
import home from "../images/home.png";
import projects from "../images/projects.svg";
import phone from "../images/phone.png";

export function Navigation(){
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <nav className={"navbar"}>
            <div className={"nav-item"}>
                {currentPath === "/" && (
                    <img src={home} alt={"home"} className={"icon-img"} />
                )}
                <Link to={"/"}>Home</Link>
            </div>

            <div className={"nav-item"}>
                {currentPath === "/about" && (
                    <img src={about} alt={"about"} className={"icon-img"} />
                )}
                <Link to={"/about"}>About</Link>
            </div>

            <div className={"nav-item"}>
                {currentPath === "/projects" && (
                    <img src={projects} alt={"projects"} className={"icon-img"} />
                )}
                <Link to={"/projects"}>Projects</Link>
            </div>

            <div className={"nav-item contact"}>
                {currentPath === "/contact" && (
                    <img src={phone} alt={"phone"} className={"icon-img"} />
                )}
                <Link to={"/contact"}>Contact</Link>
            </div>
        </nav>
    );
}