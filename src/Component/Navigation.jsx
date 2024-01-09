import React, {  useContext } from "react"
import { ThemeContext } from "../Context/themContext"
import ThemeToggle from "./ThemeToggle"
import { AuthContext } from "../Context/AuthContext"

const Navigation = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark
const {isLogin,toggleAuth}=useContext(AuthContext)
  return (
    <>
      <nav
        style={{
          background: theme.ui,
          color: theme.syntax,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1>Context Api</h1>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <button onClick={toggleAuth} style={{ height: "20px" }}>
            {isLogin ? "Login" : "Logout"}
          </button>
        </ul>
        <ul>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
      <div onClick={toggleAuth}>{isLogin ? "LogeddIn" : "LoggedOut"}</div>
    </>
  )
}

export default Navigation
