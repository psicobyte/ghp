import React from 'react'
import "./style.css"
import {headerProps} from "./types"
import {Link} from "react-router-dom";

const Header = (props: headerProps) => {
console.log("eeeee", props)

    return (
        <>
            <div><h1>Psicobyte's GitHub Profile</h1></div>
            <div>...a useless site</div>
            <nav>
                <ul className={"main_menu"}>
                    <li><Link to={"/"}
                        className={props.path === "main" ? "selected" : ""}
                    >Principal</Link></li>
                    <li><Link to={"/repos"}
                        className={props.path === "repos" ? "selected" : ""}
                    >Algunos Repositorios</Link></li>
                    <li><Link to={"/charlas"}
                        className={props.path === "charlas" ? "selected" : ""}
                    >Charlas y conferencias</Link></li>
                    <li><Link to={"/blog"}
                        className={props.path === "blog" ? "selected" : ""}
                    >Últimos posts</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Header