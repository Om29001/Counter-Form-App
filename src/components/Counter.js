import React from "react"
import Btn from "./Atoms/Btn"

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0, col: "black" }
  }

  color(k) {
    if (k === 0) {
      this.setState(() => ({ col: "black" }))
    } else if (k > 0) {
      this.setState(() => ({ col: "green" }))
    } else {
      this.setState(() => ({ col: "red" }))
    }
  }

  inc() {
    this.setState((prev) => ({
      count: prev.count + 1,
    }))
    this.color(this.state.count + 1)
  }

  dec() {
    this.setState((prev) => ({
      count: prev.count - 1,
    }))
    this.color(this.state.count - 1)
  }

  render() {
    return (
      <center>
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: this.state.col,
          }}
        >
          {this.state.count}
        </h1>
        <div>
          <Btn fun={() => this.dec()} title="Decrement" st={{ fontSize: "20px", border: "1px solid gray", padding: "10px", marginLeft: "10px", color: "white", backgroundColor: "DodgerBlue" }} />
          <Btn fun={() => this.inc()} title="Increment" st={{ fontSize: "20px", border: "1px solid gray", padding: "10px", marginLeft: "10px", color: "white", backgroundColor: "DodgerBlue" }} />
        </div>
      </center>
    )
  }
}

export default Counter
