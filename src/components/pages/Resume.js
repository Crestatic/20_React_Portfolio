import React from "react";
import resume from "../images/resume-sample.PNG";
import Github from "../images/Github_icon.png";
import Linkedin from "../images/Linkedin_icon.png";
import '../styles/resumeStyle.css';

export default function Resume() {
    return (
        <div className="container text-center text-bg-info p-3">
            <img src={resume} alt="sample resume" />
            <h3>Social:</h3>
            <a href="https://github.com/Crestatic?tab=repositories" className="col-2">
                <img src={Github} alt="Github Page" style={{ width: 50, height: 50}}/>
            </a>
            <a href="" className="col-2">
                <img src={Linkedin} alt="Linkedin Page" style={{ width: 50, height: 50}}/>
            </a>
        </div>
    );
}