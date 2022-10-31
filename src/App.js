import logo from "./logo.svg"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import React from "react"
import Counter from "./components/Counter"
import Header from "./components/Header"
import Form from "./components/Form"

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />  
        <Routes>
          <Route exact path="/" element={<Counter />}></Route>
          <Route exact path="/form" element={<Form />}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
