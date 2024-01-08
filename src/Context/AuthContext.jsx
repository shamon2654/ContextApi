import React, { Component, createContext } from 'react'
 export const AuthContext=createContext()

export class AuthContextProvider extends Component {
    state={
        isLogin: false,
    }
    toggleAuth = () => {
        this.setState({ isLogin: !this.state.isLogin })
    }
  render() {
    return (
        <AuthContext.Provider value={{...this.state,toggleAuth:this.toggleAuth }}>
            {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default AuthContextProvider