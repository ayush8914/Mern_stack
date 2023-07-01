import React from "react";
import Footer from "./Footer";

export default function Main(){
    return (
    <div>

        <main>

        <h1 className="main--title">Fun Facts About React</h1>
    <ul className="main--facts">
        <li>Was released in 2013</li>
        <li>Was Originally created by Jordon Walke</li>
        <li>Has Well Over 100K Stars on GitHub</li>
        <li>Is maintained by FaceBook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
        </main>
        <Footer />
    </div>

    )
}