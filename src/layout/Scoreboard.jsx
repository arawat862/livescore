import React from 'react'
//
import './Stylesheet.css';
//import { Scoreboardapi } from '../layout/Scoreboardapi';


const Scoreboard = () => {

    return (
        <>
            <div className="container mb-3">
                <h2>ScoreBoard</h2>

                <div className="card text-white bg-primary mb-3">
                    <div className="card-header">LIVE SCORE</div>
                    <div className="card-body">
                        <h5 className="card-title">Primary card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                
                <div id="matchTable" className="match-table">

                </div>

                <hr />



            </div>
            <script src="Scoreboardapi.js"></script>
        </>

    )
}

export default Scoreboard;