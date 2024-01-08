import React, { Component } from 'react'
import { ThemeContext } from '../Context/themContext'
import ThemeToggle from './ThemeToggle';

export class Navigation extends Component {
  static contextType = ThemeContext;//access the themecontext properties using static
  render() {
    // console.log(this.context)//props of the context syntax
    const { isLightTheme, dark, light } = this.context
    const theme = isLightTheme ? light : dark;
    return (
      <nav style={{background:theme.ui , color:theme.syntax,display:"flex" ,justifyContent:"space-between"}}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul>
        <li ><ThemeToggle/></li>
        </ul>
        
      </nav>
    )
  }
}

export default Navigation