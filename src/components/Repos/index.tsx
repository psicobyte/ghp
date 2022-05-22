import React, { useState, useEffect } from 'react'
import dataJSON from '../../data/repolist.json'
import Card from "./Card";
import {Repo} from "./types";

const RepoList = () => {
    const [repoList, setRepoList] = useState<Repo[]>([])

    useEffect(() => {
        (async function () {
            setRepoList(
                () => { return dataJSON }
            )
        })()
    }, [])

    return (
        <div>
            <h2>Algunos repositorios</h2>
            <div>
                {repoList.map((item: Repo) => (
                    <Card key = {item.repolink} {...item} />
                ))}
            </div>
        </div>
    )
}

export default RepoList