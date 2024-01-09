import React, {  useContext } from "react"
import { ThemeContext } from "../Context/themContext"

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext)
  return (
    <div>
      <label class="switch">
        <input onChange={toggleTheme} type="checkbox" />
        <span class="slider round"></span>
      </label>
    </div>
  )
}

export default ThemeToggle
