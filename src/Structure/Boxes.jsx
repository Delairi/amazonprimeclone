import React from 'react'
import styledComponents from 'styled-components'
import { Paragraph, Subtitle } from '../Components/Text'
import ImgScreen from '../images/screen.png'
const Boxes = ({img,sub,p}) => {
  return (
    <Box>
    <Img src={img}></Img>
    <Subtitle>{sub}</Subtitle>
    <Pr>{p}</Pr>
    </Box>
  )
}
const Box = styledComponents.div`
display:flex;
flex-direction:column;
width:30%;
align-items:center;
justify-content:center;
text-align:center;

@media ${props => props.theme.mediaQueries['mediaTablet']}{
  width:90%;
  margin: 1em 1em 1em 1em;
  }

@media ${props => props.theme.mediaQueries['mediaCel']}{
    width:90%;
    margin: 1em 1em 1em 1em;
    }
`
const Pr = styledComponents(Paragraph)`
color:black;
font-size:1.45em;
margin:0;
@media ${props => props.theme.mediaQueries['mediaTablet']}{
  text-align:center;
   }
@media ${props => props.theme.mediaQueries['mediaCel']}{
   text-align:center;
    }
`
const Img = styledComponents.img`
width:23vw;
height:23vw;
margin:0;
@media ${props => props.theme.mediaQueries['mediaTablet']}{
  width:45vw;
  height:45vw;
  }
@media ${props => props.theme.mediaQueries['mediaCel']}{
    width:85vw;
    height:85vw;
    }
`
export default Boxes