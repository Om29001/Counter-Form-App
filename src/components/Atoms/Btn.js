import React from "react"

class Btn extends React.Component {
  render() {
    return (
      <button onClick={this.props.fun} style={this.props.st}>
        {this.props.title}
      </button>
    )
  }
}

export default Btn
