import React from 'react'
import { Button, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
    return (

        <Navbar bg="dark" variant="dark">
            <Navbar.Brand><h3>LiveScore</h3></Navbar.Brand>
            <Nav className="mr-auto">
                <a class="nav-link" to="/about">PREDICTOR</a>
                <a class="nav-link" to="/about">NEWS</a>
                <a class="nav-link" to="/about">LIVE MATCH</a>
                <a class="nav-link" to="/about">LEAGUES</a>
                <a class="nav-link" to="/about">LIVE SCORES</a>
                <a class="nav-link" to="/about">TIPS</a>

            </Nav>
            <button style={{ textAlign: "right" }} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal">Login</button>

            <div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="ModalLabel">Login</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <form>
                                <div className="mb-3">
                                    <label htmlFor="InputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="InputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="InputPassword1" />
                                    <span id="passwordHelpInline" className="form-text">Must be 8-20 characters long.</span>
                                </div>
                            </form>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Login</button>

                        </div>
                    </div>
                </div>
            </div>

        </Navbar>
    )
}


