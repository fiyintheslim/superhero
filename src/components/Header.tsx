import {useEffect} from 'react'
import {Header, Logo} from "../styles/components"
import logo from "../imgs/logo.png"

const Head = () => {
    useEffect(()=>{
        console.log('image', logo)
    }, [])
  return (
    <Header>
        <Logo src={logo} alt="Super logo." />
    </Header>
  )
}

export default Head