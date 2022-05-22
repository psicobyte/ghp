import React from 'react'
import {Conference} from "./types";
import ReactPlayer from "react-player";
import "./style.css"
const Card = (props: Conference) => {

    return (
        <div>
            <h3><a href={props.link}>{props.title}</a></h3>
            <div className={"yt"}><ReactPlayer url = {props.link} /></div>
            <div className={"description"}>{props.description}</div>
        </div>
    )
}

export default Card
