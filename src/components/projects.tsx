import React from "react";
import { useState } from "react";

//FIXME use array instead of showDropwdown 1-4
export function Projects(){
    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    const [showDropdown3, setShowDropdown3] = useState(false);
    const [showDropdown4, setShowDropdown4] = useState(false);

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
        description: "Contains code from the following subjects: ",
        link: "https://github.com/amalie246"
    }]

    return (
        <div className={"project-container"}>
            <div className={"project"}>
                <h4>Packaged Easier Access to API's (PEATA)</h4>
                <div
                    className={"dropdown-icon"}
                    onClick={() => setShowDropdown1(!showDropdown1)}
                    style={{cursor: "pointer"}}
                ></div>
                <div className={`dropdown ${showDropdown1 ? "visible" : ""}`}>
                    <p>
                        Software designed for non-technical people, for easier access to the TikTok Research API.
                        Written
                        in Python using Requests, Tkinter, Pandas, OpenPyxl, etc. Comes with executables for Windows
                        64-bit and Mac M1/M2.
                    </p>
                    <button
                        onClick={() => window.open("https://github.com/amalie246/PEATA", "_blank")}
                    >
                        See code!
                    </button>
                </div>
            </div>

            <div className={"project"}>
                <h4>Event Calendar (PG6301-Exam) [WILL BE PUBLIC SOON]</h4>
                <div
                    className={"dropdown-icon"}
                    onClick={() => setShowDropdown2(!showDropdown2)}
                    style={{cursor: "pointer"}}
                ></div>
                <div className={`dropdown ${showDropdown2 ? "visible" : ""}`}>
                    <p>Event Calendar created with React, Node, Express using Google and EntraId login. Made as an exam
                        delivery, fall of 2024</p>
                    <button
                        onClick={() => window.open("https://github.com/kristiania-pg6301-2024/pg6301-exam-amalie246", "_blank")}>
                        See code!
                    </button>
                </div>
            </div>

            <div className={"project"}>
                <h4>Programming in C for Linux (PG3401-Exam) [WILL BE PUBLIC SOON]</h4>
                <div
                    className={'dropdown-icon $'}
                    onClick={() => setShowDropdown3(!showDropdown3)}
                    style={{cursor: "pointer"}}
                ></div>
                <div className={`dropdown ${showDropdown3 ? "visible" : ""}`}>
                    <p>Exam delivery in Programming in C for Linux, compiled on Debian 10. Contains basic C programming,
                        threading and networking. Exam delivery, spring 2025. [WILL BE PUBLIC AFTER GRADING]</p>
                    <button onClick={() => window.open("https://github.com/amalie246/Exam-Pg3401", "_blank")}>
                        See code!
                    </button>
                </div>
            </div>

            <div className={"project"}>
                <h4>Programming projects from my bachelors in IT - Programming, 2026 graduation. [WILL BE PUBLIC
                    SOON]</h4>
                <div
                    className={"dropdown-icon"}
                    onClick={() => setShowDropdown4(!showDropdown4)}
                    style={{cursor: "pointer"}}
                ></div>
                <div className={`dropdown ${showDropdown4 ? "visible" : ""}`}>
                    <p>Contains code from the following subjects</p>
                    <ul>
                        <li>Introduction to Programming (JavaScript)</li>
                        <li>Object-Oriented Programming (Java, MySql)</li>
                        <li>Webdevelopment and API-design (React, Node, Express, Vite, Nodemon, Typescript, MongoDb,
                            Heroku Deployment)
                        </li>
                        <li>Software Design (C#, EF CORE, Sqlite, ADO.NET)</li>
                        <li>Backend Programming (Java, Springboot, Thymeleaf, Socket programming, JPA, PostgreSQL, JPA,
                            Flyway)
                        </li>
                        <li>C for Linux (C, Debian 10)</li>
                        <li>Algorithms and Data Structures (Java)</li>
                        <li>Microservices (NOT FINISHED)</li>
                        <li>DevOps in Cloud (NOT FINISHED)</li>
                        <li>Agile Project (NOT FINISHED)</li>
                    </ul>
                    <p>[I have not set up my Github Education profile yet, temporarily here is a lnik to my general
                        github profile!</p>
                    <button onClick={() => window.open("https://github.com/amalie246", "_blank")}>
                        See all!
                    </button>
                </div>
            </div>

        </div>
    )
}