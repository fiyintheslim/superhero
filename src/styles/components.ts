import styled, {createGlobalStyle} from "styled-components";

const color_1 = '#000000';
const color_2 = '#B82601';
const color_3 = '#062F4F';
const color_4 = '#813772';
export const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    padding:0;
    margin: 0;
    font-family: 'Bangers', 'Roboto', cursive, sans-serif;
    transition: 0.3s ease;
}
body{
    /* background: linear-gradient(${color_1}, ${color_2}, ${color_3}, ${color_4}) */
    background:no-repeat linear-gradient(217deg, ${color_2}, rgba(0,0,0,0) 70.71%),
    no-repeat linear-gradient(127deg, ${color_3}, rgba(0,0,0,0) 70.71%),
    no-repeat linear-gradient(336deg, ${color_4}, rgba(0,0,0,0) 70.71%);
    min-height: 100vh;
    backdrop-filter: blur(50px);
}
`
const Container = `
    
    margin: 0 0.5rem;
    @media only screen and (min-width: 768px){
        width: 80rem;
        margin: 0 auto;
    }
`
export const Header = styled.header`
    height: 6rem;
    width: 100vw;
    padding: 0 1rem;
    position:sticky;
    top:0;
    right:0;
    box-shadow: 0px 1px 10px 4px rgba(0, 0, 0, 0.3);
    margin-bottom: 2rem;
    @medis only screen and (min-width: 768px){
        height: 7rem;
    }
    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        ${Container}
        }
    svg{
        display: block;
        width: 2.2rem;
        height: 2.2rem;
        @media only screen and (min-width: 768px){
            display: none;
        }
    }
`
export const Logo = styled.img`
width: 6rem;
height: 6rem;
`
export const Content = styled.p`
color:blue
height: 100%;
`
export const SearchInput = styled.div`
    position: absolute;
    height: 2.5rem;
    width: 15rem;
    margin-right: 0.3rem;
    right: 0;
    transform: translateX(100vh) translateY(3rem);

    @media only screen and (min-width: 768px){
        position: relative;
        right:0;
        width: 20rem;
        margin:0;
        transform: translateX(0vh) translate(0rem);
    }
    
    input{
        outline: none;
        border: none;
        box-shadow: inset 0px 3px 5px -1px rgba(0, 0, 0, 0.5);
        border-radius: 10rem;
        height: 100%;
        padding: 1rem 1.5rem;
        width: 100%;
        font-size: 1.5rem;
        
    }
    button{
        position: absolute;
        right: 0rem;
        height: 100%;
        width:5rem;
        border-radius: 10rem;
        background: ${color_3};
        color: white;
        cursor: pointer;
        @media screen only and (min-width:768px){
            width: 5rem;
        }
        &:hover{
            color: ${color_2}
        }
    }
`