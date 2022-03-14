import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from 'styled-components'
import Theme from './Theme/Theme'
import Global from './Theme/Global'

ReactDOM.render(

    <ThemeProvider theme={Theme}>
      <Global></Global>
    <App />
    </ThemeProvider>,
  document.getElementById('root')
)
