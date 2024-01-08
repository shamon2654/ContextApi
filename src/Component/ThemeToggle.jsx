import React, { Component } from "react"
import { ThemeContext } from "../Context/themContext"

export class ThemeToggle extends Component {
  static contextType = ThemeContext
  render() {
    const { toggleTheme } = this.context
    return (
      <div>
        <label class="switch">
          <input onChange={toggleTheme} type="checkbox" />
          <span class="slider round"></span>
        </label>

        
      </div>
    )
  }
}

export default ThemeToggle
