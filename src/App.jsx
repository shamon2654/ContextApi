import React, { Component } from "react"
import Navigation from "./Component/Navigation"
import ThemeContextProvider from "./Context/themContext"
import AuthContextProvider from "./Context/AuthContext"
import BookList from "./Component/Login"

const App=()=>{
    return (
      <>
        <ThemeContextProvider>
          <AuthContextProvider>
            <Navigation />
            <BookList />
          </AuthContextProvider>
        </ThemeContextProvider>
      </>
    )
  }


export default App
