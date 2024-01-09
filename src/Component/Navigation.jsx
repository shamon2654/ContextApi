import React, { Component } from "react"
import { ThemeContext } from "../Context/themContext"
import ThemeToggle from "./ThemeToggle"
import { AuthContext } from "../Context/AuthContext"

export class Navigation extends Component {
  static contextType = ThemeContext //access the themecontext properties using static
  render() {
    // console.log(this.context)//props of the context syntax
    // const { isLightTheme, dark, light } = this.context
    // const theme = isLightTheme ? light : dark;
    // return (
    //   <nav style={{background:theme.ui , color:theme.syntax,display:"flex" ,justifyContent:"space-between"}}>
    //     <ul>
    //       <li>Home</li>
    //       <li>About</li>
    //       <li>Contact</li>
    //     </ul>
    //     <ul>
    //     <li ><ThemeToggle/></li>
    //     </ul>

    //   </nav>
    // )
    return (
      <AuthContext.Consumer>
        {(
          authContext //using multiple context
        ) => (
          <ThemeContext.Consumer>
            {(context) => {
              //another way to get the context data or consume the data
              const { isLightTheme, dark, light } = context
              console.log(context)
              const theme = isLightTheme ? light : dark
              console.log(theme)
              const { isLogin,toggleAuth } = authContext;
              return (
                <nav
                  style={{
                    background: theme.ui,
                    color: theme.syntax,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h1>Context Api</h1>
                  <div onClick={toggleAuth}>{isLogin? "LogeddIn":"LoggedOut"}</div>
                  <button onClick={toggleAuth}>{isLogin ? "Login":"Logout"}</button>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                  <ul>
                    <li>
                      <ThemeToggle />
                    </li>
                  </ul>
                </nav>
              )
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    )
  }
}

export default Navigation
