import React from 'react'
import styledComponents from 'styled-components'
import ImgLogo from '../images/logowhite.png'
import ImgChange from '../images/global.png'
import ImgUser from '../images/user.png'
import { Span } from '../Components/Text'
const Navegador = () => {
  return (
   <Nav>
       <Img></Img>
       <Total>
       <BoxButton>
            <ImgButton/>
            <Button>EN</Button>
            <Button>Sign In</Button>
        </BoxButton>
       </Total>
        
   </Nav>
  )
}

const Nav = styledComponents.div`
display:flex;
flex-direction:row;
padding:1em;
justify-content:center;
background:#0f171e;
background-image:linear-gradient(180deg,#1b2530 0,rgba(27,37,48,.85));
@media ${props => props.theme.mediaQueries['mediaTablet']}{
 
}
@media ${props => props.theme.mediaQueries['mediaCel']}{
  padding:1.1em;
}

`

const Total = styledComponents.div`
justify-content: flex-end;
width: 100%;
display: flex;
`

const Button = styledComponents.button`
background:none;
border:none;
color:white;
padding:none;
font-family: 'Lato', sans-serif;
font-size:1.1em;
margin:0em 1em 0em 0em;
cursor:pointer;
@media ${props => props.theme.mediaQueries['mediaCel']}{
  display:none;
}
`
const ImgButton = styledComponents.div`
background-image:url('/src/images/global.png');
background-repeat:no-repeat;
background-size:cover;
width:1.5em;
height:1.5em;
margin:0.2em;
filter:invert(1);
@media ${props => props.theme.mediaQueries['mediaTablet']}{
 
}
@media ${props => props.theme.mediaQueries['mediaCel']}{
  background-image:url('/src/images/user.png');
  width:1em;
  height:1em;
}
`
const BoxButton = styledComponents.div`
display:flex;
flex-direction:row;
align-items:center;

`
const Img = styledComponents.div`
background-image:url('/src/images/logowhite.png');
background-repeat:no-repeat;
background-size:cover;
width:7em;
height:auto;
@media ${props => props.theme.mediaQueries['mediaTablet']}{
 
}
@media ${props => props.theme.mediaQueries['mediaCel']}{
  width:10em;
  height:2em;
}
`
export default Navegador