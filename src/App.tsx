import React from 'react'
import {Content, GlobalStyle} from "./styles/components"
import Header from "./components/Header"

const App = () => {
  return (
    <>
        <GlobalStyle />
        <Header />
        <div><Content>Hello App</Content></div>
    </>
  )
}

export default App