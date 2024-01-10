import React, { Component } from "react"
import Navigation from "./Component/Navigation"
import ThemeContextProvider from "./Context/themContext"
import AuthContextProvider from "./Context/AuthContext"
import BookList from "./Component/Login"
import BookContextProvider from "./Context/BookContext"

const App = () => {
  return (
    <>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navigation />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </>
  )
}

export default App
