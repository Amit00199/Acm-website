import {useState} from "react";
import './Card.css'
const Card = ({ name, position, image,variable, linkedin, github,instagram}) => {
    return (
        <div className="container">
        <div className="card">
            <img src={image} alt={name}/>
            <div className="content">
                <p className="name">{name}</p>
                <p className="position">{position}</p><p className="variable">{variable}</p>
            </div>
            <div className="line"></div>
            <a href={linkedin} target="_blank">
            <img src="/linkedin.png" alt="" className="linkedin" />
            </a>
            <a href={github} target="_blank">
            <img src="/github.png" alt="" className="linkedin" />
            </a>
            <a href={instagram} target="_blank">
            <img src="/instagram.png" alt="" className="linkedin" />
            </a>
        </div>
        </div>  
    )
}
export default Card;