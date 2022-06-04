import React, {useEffect, useState, useRef} from 'react'
import {Header, Logo, SearchInput} from "../styles/components"
import logo from "../imgs/logo.png"
import Search from "./SVG/Search";
import {searchBarShow, searchBarHide} from "../utilities/animations"
import {useGetSearchResultQuery} from "../redux/datafetching/search"

const Head = () => {
  const [searchVisible, setSearchVisible] = useState(false)
  const search = useRef<HTMLDivElement>(null)
  const {data, error, isLoading} = useGetSearchResultQuery("batman")
    useEffect(()=>{
      
        console.log('image', logo, data)

    }, [data])
    const handleSearchInput = ()=>{
      if(search.current){
        if(!searchVisible){
          searchBarShow(search.current)
          
        }else{
          searchBarHide(search.current)
        }
        setSearchVisible(!searchVisible)
      }
    }
  return (
    <Header>
      <div className="container">
        <Logo src={logo} alt="Super logo." />
        <Search onClick={()=>handleSearchInput()}/>
        <SearchInput ref={search}>
          <input type="text" placeholder='Search Hero' />
          <button>Search</button>
        </SearchInput>
        
        </div>
    </Header>
  )
}

export default Head