import React from 'react'
import styledComponents from 'styled-components'
import Boxes from './Boxes'
import Navegador from './Navegador'
import Portada from './Portada'
import ImgCel from '../images/cel.png'
import ImgWifi from '../images/wifi.png'
import ImgScreen from '../images/screen.png'
import Footer from './Footer'
const Inicio = () => {
  return (
    <div>
        <Navegador></Navegador>
        <Portada></Portada>
        <Row>
        <Boxes 
        img={ImgScreen} 
        sub='Watch anywhere'
        p='Enjoy from the web or with the Prime Video app on your phone, tablet, or select Smart TVs — on up to 3 devices at once.'
        ></Boxes>

        <Boxes 
        img={ImgCel} 
        sub='Download and go'
        p='Watch offline on the Prime Video app when you download titles to your iPhone, iPad, Tablet, or Android device.'
        ></Boxes>

      <Boxes 
        img={ImgWifi} 
        sub='Data saver'
        p='Control data usage while downloading and watching videos on select phones or tablets.'
        ></Boxes>
        </Row>
    <Footer></Footer>        
    </div>
  )
}
const Row = styledComponents.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
margin:4em 0em 4em 0em;

@media ${props => props.theme.mediaQueries['mediaCel']}{
 flex-direction:column;

 }
@media ${props => props.theme.mediaQueries['mediaTablet']}{
 flex-direction:column;
 
 }
`
export default Inicio