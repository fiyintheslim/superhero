import {useEffect, useState} from 'react'
import {Header, Logo, SearchInput} from "../styles/components"
import logo from "../imgs/logo.png"
import Search from "./SVG/Search";

const Head = () => {
  const [searchVisible, setSearchVisible] = useState(false)
    useEffect(()=>{
        console.log('image', logo)
    }, [])
  return (
    <Header>
      <div className="container">
        <Logo src={logo} alt="Super logo." />
        <Search />
        <SearchInput>
          
          <input type="text" placeholder='Search Hero' />
          <button>Search</button>
        </SearchInput>
        
        </div>
    </Header>
  )
}

export default Head