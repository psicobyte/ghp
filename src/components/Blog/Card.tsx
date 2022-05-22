import React from 'react'
import {Post} from "./types";

const Card = (props: Post) => {

    return (
        <div>
            <h3><a href={props.link}>{props.title}</a></h3>
        </div>
    )
}

export default Card
