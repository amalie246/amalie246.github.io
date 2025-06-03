import React from "react";
import profile from "../images/profile.jpg";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

export function Contact(){
    return (
        <div id={"contact-container"}>

                <div id={"profile-container"}>
                    <h3>Want to get in touch?</h3>
                    <img src={profile} alt={"profile"} id={"profile-img"} />
                </div>

                <div id={"info-container"}>
                    <h3>Contact me!</h3>

                    <button id={"linkedin-btn"}
                            onClick={() => window.open("https://www.linkedin.com/in/amalie-nilsen-629289297/", "_blank")}>
                        <img src={linkedin} alt={"Linkedin icon"} id={"linkedin-img"}/>
                        Connect with me on LinkedIn
                    </button>
                    <button id={"github-btn"} onClick={() => window.open("https://github.com/amalie246", "_blank")}>
                        <img src={github} alt={"Github icon"} id={"github-img"}/>
                        Check out my Github profile
                    </button>

                    <div>
                        <h4>Have a project in mind or just want to talk?</h4>
                        <p>Reach me on e-mail: amalie.nr@hotmail.no</p>
                    </div>
                    <div>
                        <p>📍Buskerud, Norway - Available for in-office work here, or remotely other places</p>
                    </div>
                </div>

        </div>
    )
}