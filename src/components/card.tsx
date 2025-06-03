import React, {useState} from "react";

export function Card({title, skills} : {title: string, skills: string[]}){
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <div className={"card-wrap"} onClick={handleFlip}>
            <div className={`card-in ${flipped ? "flipped" : ""}`}>
                <div className={"card-front"}>
                    <h4>{title}</h4>
                </div>
                <div className="card-back">
                    <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}