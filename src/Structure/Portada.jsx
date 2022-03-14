import { Link } from 'react-router-dom'
import styledComponents from 'styled-components'
import { Paragraph, Span, Title } from '../Components/Text'
const Portada = () => {
  return (
    <Contenedor>
      <Secure></Secure>
      <Cont>

      
    <Title>Welcome to prime video</Title>
    <Divisor>
      <Paragraph>Enjoy exclusive Amazon Originals as well as popular movies and TV shows for <strong>PEN 16.99</strong> /month. Watch now, cancel anytime.</Paragraph>
      </Divisor>
      <Link to='/hola'>
        Prime Video Member? Sign in
      </Link>
      <Mix>
      <Or></Or>
      <Center>or</Center>
      <Or></Or>

      </Mix>
      <Link to='/hola'>
        Start your free trial*
      </Link>
      <Cancel>*Cancel your trial at any time</Cancel>
      </Cont>
    </Contenedor>
        
  )
}
const Cont = styledComponents.div`
display:flex;
flex-direction:column;
align-items:flex-start;
width:40%;
padding-bottom:8em;
padding:2em 4em 2em 4em;
@media ${props => props.theme.mediaQueries['mediaTablet']}{
  width:55%;
  align-items:center;
text-align:center;
margin-top:-1.5em;
}
@media ${props => props.theme.mediaQueries['mediaCel']}{
  width:80%;
  align-items:center;
text-align:center;
padding:0;
}
`
const Cancel = styledComponents(Paragraph)`
font-size:1em;
`
const Mix = styledComponents.div`
display:flex;
flex-direction:row;
width:50%;
margin:0.8em 0em 0.5em 0em;
@media ${props => props.theme.mediaQueries['mediaTablet']}{
  width:65%;
}
@media ${props => props.theme.mediaQueries['mediaCel']}{
  width:80%;
  margin:0.1em 0em 0.5em 0em;
}
`

const Center = styledComponents.span`
margin:0px 10px 0px 10px;
color:white;
font-size:1em;
font-family: 'Lato', sans-serif;

`
const Or = styledComponents.span`
color:white;
border-bottom:1px solid white;
width:50%;
font-size:1em;
margin:auto;


`
const Secure = styledComponents.div`
@media ${props => props.theme.mediaQueries['mediaTablet']}{
background:linear-gradient(to top, #000 0%, transparent 20%), url('/src/images/backgroundcel.jpg');
width:100%;
height:570px;
background-size:cover;
background-repeat:no-repeat;
background-position:center top;
}

@media ${props => props.theme.mediaQueries['mediaCel']}{
  background:linear-gradient(to top, #000 0%, transparent 20%), url('/src/images/backgroundcel.jpg');
  width:100%;
  min-height:46vh;
  background-size:cover;
  background-repeat:no-repeat;
  background-position:center top;
  }
`
const Contenedor = styledComponents.div`
background:linear-gradient(to right, #000 40%, transparent 58%),url('/src/images/background.jpg');
max-width:100%;
min-height: 70vh;
background-size:cover;
background-position: right top;
a{
  text-align:center;
  padding:1.5em;
  background:#0F79AF ;
  width:41%;
  text-decoration:none;
  color:white;
  font-size:1em;
font-family: 'Lato', sans-serif;
font-weight:600;
@media ${props => props.theme.mediaQueries['mediaTablet']}{
  width:55%;
  align-items:center;
  padding:1em;
}

@media ${props => props.theme.mediaQueries['mediaCel']}{
  width:70%;
  align-items:center;
  padding:1em;
  margin:0;
  font-size:1em;
}
}


@media ${props => props.theme.mediaQueries['mediaTablet']}{
  background-image:none;
  display:flex;
  flex-direction:column;
  align-items:center;
  background-color:#000;
  
  height:100vh
}

@media ${props => props.theme.mediaQueries['mediaCel']}{
  background-image:none;
  display:flex;
  flex-direction:column;
  align-items:center;
  background-color:#000;
  height:100vh
 
}
`

const Divisor = styledComponents.div``


export default Portada