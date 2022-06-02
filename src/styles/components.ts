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
    font-family: 'Roboto', sans-serif;
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
export const Header = styled.header`
    height: 10rem;
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
`
export const Logo = styled.img`
width: 6rem;
height: 6rem;
`

export const Content = styled.p`
color:blue
height: 100%;
`