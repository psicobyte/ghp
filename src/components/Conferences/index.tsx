import React, { useState, useEffect } from 'react'
import dataJSON from '../../data/conferences.json'
import Card from "./Card";
import {Conference} from "./types";
import "./style.css"

const Conferences = () => {
    const [conferencesList, setConferencesList] = useState<Conference[]>([])

    useEffect(() => {
        (async function () {
            setConferencesList(
                () => { return dataJSON }
            )
        })()
    }, [])

    return (
        <div className={'limit'}>
            <h2>Charlas y conferencias</h2>
            <div>
                {conferencesList.map((item: Conference) => (
                    <Card key = {item.link} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Conferences
