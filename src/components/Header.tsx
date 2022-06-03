import React, {useEffect, useState, useRef, RefObject} from 'react'
import {Header, Logo, SearchInput} from "../styles/components"
import logo from "../imgs/logo.png"
import Search from "./SVG/Search";
import {searchBarShow} from "../utilities/animations"

const Head = () => {
  const [searchVisible, setSearchVisible] = useState(false)
  const search = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        console.log('image', logo)
    }, [])
  return (
    <Header>
      <div className="container">
        <Logo src={logo} alt="Super logo." />
        <Search onClick={()=>search.current ? searchBarShow(search.current) : null}/>
        <SearchInput ref={search}>
          <input type="text" placeholder='Search Hero' />
          <button>Search</button>
        </SearchInput>
        
        </div>
    </Header>
  )
}

export default Head