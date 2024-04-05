import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark text-white">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link  " aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">General</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/bussines">Bussines</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/gadget">Gadget</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">Technology</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sport">Sport</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertenment">Entertenment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">Science</Link>
                </li>


              </ul>

            </div>
          </div>
        </nav>
      </div>
    )
  }
}
