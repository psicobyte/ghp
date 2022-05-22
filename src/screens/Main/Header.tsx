import React from 'react'
import "./style.css"
import {headerProps} from "./types"

const Header = (props: headerProps) => {
console.log("eeeee", props)

    return (
        <>
            <div><h1>Psicobyte's GitHub Profile</h1></div>
            <div>...a useless site</div>
            <nav>
                <ul className={"main_menu"}>
                    <li><a
                        href={"/"}
                        className={props.path === "main" ? "selected" : ""}
                    >Principal</a></li>
                    <li><a
                        href={"/repos"}
                        className={props.path === "repos" ? "selected" : ""}
                    >Algunos Repositorios</a></li>
                    <li><a
                        href={"/charlas"}
                        className={props.path === "charlas" ? "selected" : ""}
                    >Charlas y conferencias</a></li>
                    <li><a
                        href={"/blog"}
                        className={props.path === "blog" ? "selected" : ""}
                    >Últimos posts</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Header