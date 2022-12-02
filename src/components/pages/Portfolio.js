import React from "react";
import Github from "../images/Github_icon.png";
import Linkedin from "../images/Linkedin_icon.png";

export default function Portfolio() {
    return (
        <div className="container text-center text-bg-info p-3">
            <h1>My Portfolio</h1>
            <p className="container text-center col-6 ">
            Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
            Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
            mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
            lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
            imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
            in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
            </p>
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