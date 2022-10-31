import React, { Component } from "react"

export default class Table extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    const st = { border: "1px solid #dddddd", textAlign: "left", padding: "8px" }

    return (
      <table style={{ flexWrap: "wrap", width: "70%" }}>
        <tr>
          <th style={st}>Name</th>
          <th style={st}>Email</th>
          <th style={st}>Number</th>
          <th style={st}>City</th>
        </tr>
        {this.props.dict.map((data) => (
          <tr key={data.num}>
            <td style={st}>{data.name}</td>
            <td style={st}>{data.email}</td>
            <td style={st}>{data.num}</td>
            <td style={st}>{data.city}</td>
          </tr>
        ))}
      </table>
    )
  }
}
