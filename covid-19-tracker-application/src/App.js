import "./App.css"

import React, { Component } from 'react'
import Cards from "./components/Cards/Cards"
import CountryPicker from "./components/CountryPicker/CountryPicker"
import Chart from "./components/Chart/Chart"


export default class App extends Component {
  render() {
    return (
      <div className='container'>
      <h1>Sanwal</h1>
      <CountryPicker/>
      <Cards/>
      <Chart/>
      </div>
    )
  }
}
