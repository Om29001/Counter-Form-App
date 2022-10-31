import React, { Component } from "react"

export default class SearchBar extends Component {
  render() {
    return (
      <form style={{ margin: "10px", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
        <label>
          Search : 
          <input style={{ backgroundColor: "beige" }} type="text" value={this.props.search} onChange={(e) => this.props.fun(e.target.value)} />
        </label>
      </form>
    )
  }
}
