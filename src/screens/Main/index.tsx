import React from 'react'
import Repos from "../../components/Repos";
import Blog from "../../components/Blog";
import Conferences from "../../components/Conferences";
import Profile from "../../components/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./style.css"

const Main = () => {

    return (
        <BrowserRouter basename="/ghp">
            <Routes>
                <Route path="/" element={<><Header path={"main"} /><Profile/></>}/>
                <Route path="/blog" element={<><Header path={"blog"} /><Blog/></>}/>
                <Route path="/charlas" element={<><Header path={"charlas"} /><Conferences/></>}/>
                <Route path="/repos" element={<><Header path={"repos"} /><Repos/></>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>

    )
}

export default Main