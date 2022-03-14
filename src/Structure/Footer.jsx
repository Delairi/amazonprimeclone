import React from 'react'
import { Link } from 'react-router-dom'
import styledComponents from 'styled-components'
import { Span } from '../Components/Text'
import ImgLogo from '../images/logo.png'
const Footer = () => {
  return (
   <Foo>
       <Img src={ImgLogo}></Img>
       <RowLink>
           
        <Row>
            <Link to='/'>Terms and Privacy Notice</Link>
            <Link to='/'>Send us feed back</Link>
            <Link to='/'>Help</Link>
        </Row>
        <Spans>© 1996-2022, Amazon.com, Inc. or its affiliates</Spans>
  
        </RowLink>
   </Foo>
  )
}

const Foo = styledComponents.div`
padding:2em 0em 4em 0em;
background:#0b1014f0;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
a{
    color:#007185;
    font-size:1em;
    text-decoration:none;
    font-family: 'Lato', sans-serif;
    white-space:no-wrap;
    @media ${props => props.theme.mediaQueries['mediaCel']}{
     font-size:0.9em;
    }
}

`
const Spans = styledComponents(Span)`
color:#949494;
margin:0em 0.5em 0em 0.5em;
font-size:1em;

`
const Img = styledComponents.img`
width:7em;
height:2em;
`


const Row = styledComponents.div`
display:flex;
flex-direction:row;
text-align:center;
justify-content:center;
@media ${props => props.theme.mediaQueries['mediaCel']}{
    padding:1em;
    flex-wrap:wrap;
}

`
const RowLink = styledComponents.div`
display:flex;
flex-direction:row;
text-align:center;
justify-content:center;
@media ${props => props.theme.mediaQueries['mediaCel']}{
    display:flex;
    flex-direction:column;
}
`


export default Footer