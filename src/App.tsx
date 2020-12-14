import {Routes} from 'Routes'
import {Banner} from 'components/Banner'
import {Footer} from 'components/Footer'
import {Header} from 'components/Header'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'

/** Theme. */
import './theme/app.scss'

/**
 * Main app.
 * @return Main application.
 */
const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Banner />
    <Routes />
    <Footer />
  </BrowserRouter>
)

/**
 * Main app.
 */
// eslint-disable-next-line import/no-default-export
export default App
