import React from 'react'
import logo from './logo.svg'
import './App.css'

/**
 * Main app.
 * @return Main application.
 */
const App: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <img alt="logo" className="App-logo" src={logo} />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" rel="noopener noreferrer" target="_blank">
        Learn React
      </a>
    </header>
  </div>
)

/**
 * Main app.
 */
// eslint-disable-next-line import/no-default-export
export default App
