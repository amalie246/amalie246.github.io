import React, {useState} from "react";
import {Card} from "./card";

export function About(){
    const languages = ["Java", "JavaScript", "Python", "C", "C#", "Typescript", "HTML5", "CSS3", "SQL"];
    const frameworks = ["Spring Boot", "React", "Express", "Node.js"];
    const tools = ["Docker", "Git", "Nodemon", "Vite", "Npm", "Heroku"];
    const database = ["PostgreSQL", "MongoDb", "SQLite", "MySQL"];
    const orms = ["JPA", "Hibernate", "Flyway", "ADO.NET", "EF Core"];
    const skills = ["Multi-threading", "Socket programming", "Web development", "Object Oriented Programming", "Fullstack Development", "RESTful API design", "Database design",
    "DevOps Concepts", "Version Control", "Test & Debug Tools"];
    const softSkills = ["Agile Workflow", "Problem Solving", "Adaptability", "Self-driven"];


    return (
        <div id={"about-container"}>
            <div id={"about-wrapper"}>
                <p>I am a bachelors student in IT - Programming, graduating in 2026.
                I have previous work experience with development from my PEATA-project at Høyskolen Kristiania,
                    and you can see my work in the "Projects" section! This summer I am starting my summer
                    internship at SATS Norway, where I will work with app-development. I'm preparing to start
                    my career as a developer, so take a look below to see my skills!
                </p>
            </div>
            <div id={"card-container"}>
                <Card title={"Languages"} skills={languages} />
                <Card title={"Frameworks"} skills={frameworks} />
                <Card title={"Tools"} skills={tools} />
                <Card title={"Database"} skills={database} />
                <Card title={"ORMs"} skills={orms} />
                <Card title={"Skills"} skills={skills} />
                <Card title={"Soft Skills"} skills={softSkills} />
            </div>
        </div>
    )
}