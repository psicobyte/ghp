import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {BlogData, Post} from './types'
import Card from "./Card";

const PostList = () => {
    const apiURL = "https://api.rss2json.com/v1/api.json?rss_url=https://www.psicobyte.com/rdf.php"
    const [postList, setPostList] = useState<BlogData | {}>({})
    const apiRestQuery = async (url: string) => {
        try {
            const response = await axios.get(url)
            return response.data
        } catch (error) {
            console.log('error en la api')
        }
    }
    useEffect(() => {
        (async function () {
            const data = await apiRestQuery(apiURL)
            setPostList(
                () => data
            )
        })()
    }, [])

    console.log('error en la api', postList)
    return ('items' in postList) ? (
        <div>

                <h2><a href={postList.feed.url} >{postList.feed.title}</a></h2>

            <h2>Últimos posts publicados en el blog</h2>
            <div>
                {postList.items.map((item: Post) => (
                    <Card key = {item.link} {...item} />
                ))}
            </div>
        </div>
    ) : (<></>)
}

export default PostList