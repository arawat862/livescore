import React from 'react'
//import { Card, Button } from 'react-bootstrap';
import './Stylesheet.css';


import video1 from './../assets/videos/1.mp4';
import video2 from './../assets/videos/2.mp4';
import video3 from './../assets/videos/3.mp4';
import video4 from './../assets/videos/4.mp4';


export const Highlight = () => {
    return (
        <>
            <div>

                <h3 id="nm">Highlights</h3>

                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div>
                            <video src={video1} width="350" height="200" controls="controls" autoplay="true" />
                            <h5 className="card-title">live match</h5>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <video src={video2} width="350" height="200" controls="controls" autoplay="true" />
                            <h5 className="card-title">today's highlights</h5>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <video src={video3} width="350" height="200" controls="controls" autoplay="true" />
                            <h5 className="card-title">football match</h5>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <video src={video4} width="350" height="200" controls="controls" autoplay="true" />
                            <h5 className="card-title">football match</h5>

                        </div>
                    </div>

                </div>

            </div>


        </ >




    )
}

export default Highlight;