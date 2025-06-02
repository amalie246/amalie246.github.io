import React from "react";
import { useState } from "react";
export function Projects(){
    const [openDropdowns, setOpenDropdowns] = useState([false, false, false, false]);

    const toggleDropdown = (index: number) => {
        setOpenDropdowns((prev) =>
            prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
        );
    };

    const projects = [{
        title: "Packaged Easier Access to API's (PEATA)",
        description:
    "Software designed for non-technical people, for easier access to the TikTok Research API...",
        link: "https://github.com/amalie246/PEATA"
        },{
        title: "Event Calendar (PG6301-Exam) [WILL BE PUBLIC SOON]",
        description: "Event Calendar created with React, Node, Express using Google and EntraId login. Made as an exam\n" +
            "                        delivery, fall of 2024",
        link: "https://github.com/kristiania-pg6301-2024/pg6301-exam-amalie246"
        }, {
        title: "Programming in C for Linux (PG3401-Exam) [WILL BE PUBLIC SOON]",
        description: "Exam delivery in Programming in C for Linux, compiled on Debian 10. Contains basic C programming,\n" +
            "                        threading and networking. Exam delivery, spring 2025. [WILL BE PUBLIC AFTER GRADING]",
        link: "https://github.com/amalie246/Exam-Pg3401"
        }, {
        title: "Programming projects from my bachelors in IT - Programming, 2026 graduation. [WILL BE PUBLIC\n" +
            "                    SOON]",
        description: "Contains code from my previous programming subjects during my Bachelors, description of each course is found on my Github page. I have not set up my Github Education profile yet, so for now I am just linking to my general profile!",
        link: "https://github.com/amalie246"
    }]

    return (
        <div className={"project-container"}>
            {projects.map((project, index) => (
                <div className={"project"} key={index}>
                    <h4>{project.title}</h4>

                    <div
                        className={`dropdown-icon ${openDropdowns[index] ? "rotated" : ""}`}
                        onClick={() => toggleDropdown(index)}
                    ></div>

                    <div className={`dropdown ${openDropdowns[index] ? "visible" : ""}`}>
                        <p>{project.description}</p>
                        <button onClick={() => window.open(project.link, "_blank")}>
                            See code!
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}