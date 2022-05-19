import React, { useState, useEffect } from 'react'
import dataJSON from '../../data/repolist.json'
interface Repo {
    title:       string;
    repolink:    string;
    description: string;
    bloglink:    string;
}

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
            <h1>Repositorios</h1>
            <div>
                {repoList.map((item: Repo) => (
                    <div>
                        {item.title}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RepoList