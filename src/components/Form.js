import React from "react"
import Btn from "./Atoms/Btn"

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = { dict: [], name: "", email: "", num: 0, city: "" }
  }

  render() {
    return (
      <center>
        <div>
          <form style={{ margin: "10px", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
            <label style={{ margin: "5px", fontSize: "large" }}>
              Name:
              <input style={{ backgroundColor: "beige" }} type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
            </label>

            <label style={{ margin: "5px", fontSize: "large" }}>
              Email:
              <input style={{ backgroundColor: "beige" }} type="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
            </label>

            <label style={{ margin: "5px", fontSize: "large" }}>
              Number:
              <input style={{ backgroundColor: "beige" }} type="number" value={this.state.num} onChange={(e) => this.setState({ num: e.target.value })} />
            </label>

            <label style={{ margin: "5px", fontSize: "large" }}>
              City:
              <select style={{ backgroundColor: "beige" }} value={this.state.city} onChange={(e) => this.setState({ city: e.target.value })}>
                <option selected value="mumbai">
                  Mumbai
                </option>
                <option value="pune">Pune</option>
                <option value="banglore">Banglore</option>
                <option value="surat">Surat</option>
              </select>
            </label>
          </form>
        </div>
        <Btn fun={() => this.inc()} title="Submit" st={{ fontSize: "20px", border: "1px solid gray", padding: "10px", marginLeft: "10px", color: "white", backgroundColor: "DodgerBlue" }} />
        <hr />
      </center>
    )
  }
}

export default Form
