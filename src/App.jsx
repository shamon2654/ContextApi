import React, { Component } from "react"
import Navigation from "./Component/Navigation"
import Login from "./Component/Login"
import ThemeContextProvider from "./Context/themContext"
import AuthContextProvider from "./Context/AuthContext"

export class App extends Component {
  render() {
    return (
      <>
        <ThemeContextProvider>
          <AuthContextProvider>
            <Navigation />
            <Login />
          </AuthContextProvider>
        </ThemeContextProvider>
      </>
    )
  }
}

export default App
