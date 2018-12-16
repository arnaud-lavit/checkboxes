import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    checkboxes: [
      {id: 1, isChecked: false},
      {id: 2, isChecked: false},
      {id: 3, isChecked: false},
      {id: 4, isChecked: false},
      {id: 5, isChecked: false}
    ]
  }

  checkAll = e => {
    const checkboxes = [...this.state.checkboxes]
    checkboxes.map(checkbox => checkbox.isChecked = e.target.checked)
    this.setState({checkboxes})
  }

  checkToggle = e => {
    const checkboxes = [...this.state.checkboxes]
    checkboxes.map(checkbox => {
      if (checkbox.id === +e.target.value) {
        checkbox.isChecked = e.target.checked
      }
      return checkboxes
    })
    this.setState({checkboxes})
  }

  render() {
    const checkboxes = this.state.checkboxes.map(checkbox => (
      <input
        type='checkbox'
        key={checkbox.id}
        value={checkbox.id} 
        onChange={this.checkToggle} 
        checked={checkbox.isChecked} />
    ))
    const isAllChecked = this.state.checkboxes.filter( checkbox => checkbox.isChecked).length === this.state.checkboxes.length

    return (
      <div className="App">
        <input type="checkbox" onChange={this.checkAll} checked={isAllChecked} />
        { checkboxes }
      </div>
    )
  }
}

export default App
