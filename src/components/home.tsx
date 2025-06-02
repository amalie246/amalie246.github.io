import React from "react";
import { useNavigate } from "react-router-dom";


export function Home(){
    const navigate = useNavigate();
    return (
        <div id={"home-container"}>
            <div id={"introduction-container"}>
                <h2>Hi! I'm Amalie</h2>
                <p>I am a bachelor's student in IT - Programming, graduating in 2026. I specialize in
                    backend-programming, but my interest is in everything tech-related!</p>
                <p>My focus is on creating efficient software and tools- and I'm most exited about low-level
                    programming, machine learning, and backend systems.</p>

                <button onClick={() => navigate("/about")} className={"home-btn"}>My Tech Stack</button>
            </div>
            <div id={"home-contact-container"}>
                <p>Interested in my skills and projects? Feel free to reach out!</p>
                <button onClick={() => navigate("/contact")} className={"home-btn"}>Contact me</button>
            </div>
        </div>
    )
}