import React, { Component } from "react"
import { Link } from "react-router-dom"
import Btn from "./Atoms/Btn"

export default class Header extends Component {
  render() {
    return (
      <center style={{ backgroundColor: "bisque", padding: "5px", paddingBottom: "10px" }}>
        <div>
          <h1>Assignment App</h1>
        </div>
        <Link to="/">
          <Btn title="Counter App" st={{ fontSize: "20px", border: "1px solid gray", padding: "10px", marginLeft: "10px", color: "white", backgroundColor: "brown" }} />
        </Link>
        <Link to="/form">
          <Btn title="Form App" st={{ fontSize: "20px", border: "1px solid gray", padding: "10px", marginLeft: "10px", color: "white", backgroundColor: "brown" }} />
        </Link>
      </center>
    )
  }
}
