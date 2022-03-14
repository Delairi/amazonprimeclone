import styledComponents from "styled-components";

const Title = styledComponents.h1`
color:white;
font-size:2.5em;
font-family: 'Lato', sans-serif;
@media ${props => props.theme.mediaQueries['mediaTablet']}{
    font-size:2em;
    margin: 0;
  }

  @media ${props => props.theme.mediaQueries['mediaCel']}{
    font-size:1.9em;
    margin: 0;
  }
`

const Subtitle = styledComponents.h2`
color:white;
font-size:2.2em;
font-family: 'Lato', sans-serif;
color:black;
margin:0.3em;
font-weight:600;
`

const Paragraph = styledComponents.p`
color:white;
font-size:1.3em;
font-family: 'Lato', sans-serif;
@media ${props => props.theme.mediaQueries['mediaTablet']}{
    font-size: 1.45em;
    
  }

  @media ${props => props.theme.mediaQueries['mediaCel']}{
    font-size:1.05em;
  }
`
const Span = styledComponents.p`
color:white;
font-size:1.3em;
font-family: 'Lato', sans-serif;
@media ${props => props.theme.mediaQueries['mediaTablet']}{
    font-size:1.2em;
  }
`

export {Title,Paragraph,Span,Subtitle}