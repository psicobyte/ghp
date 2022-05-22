import React from 'react'
import {Repo} from "./types";

const Card = (props: Repo) => {

    return (
        <div>
            <h3><a href={props.repolink}>{props.title}</a></h3>
            <div>{props.description}</div>
        </div>
    )
}

export default Card
