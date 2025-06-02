import React from "react";
import { Link, useLocation } from "react-router-dom";

export function Navigation(){
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <nav className={"navbar"}>
            <div className={"nav-item"}>
                {currentPath === "/" && (
                    <img src={"src/images/home.png"} alt={"home"} className={"icon-img"} />
                )}
                <Link to={"/"}>Home</Link>
            </div>

            <div className={"nav-item"}>
                {currentPath === "/about" && (
                    <img src={"src/images/about.png"} alt={"about"} className={"icon-img"} />
                )}
                <Link to={"/about"}>About</Link>
            </div>

            <div className={"nav-item"}>
                {currentPath === "/projects" && (
                    <img src={"src/images/projects.svg"} alt={"projects"} className={"icon-img"} />
                )}
                <Link to={"/projects"}>Projects</Link>
            </div>

            <div className={"nav-item contact"}>
                {currentPath === "/contact" && (
                    <img src={"src/images/phone.png"} alt={"phone"} className={"icon-img"} />
                )}
                <Link to={"/contact"}>Contact</Link>
            </div>
        </nav>
    );
}