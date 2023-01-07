import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import Home from './pages/Home'
import About from './pages/About'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <main>
      <div className="container">
    {/* <Home/> */}
    <About/>

      </div>
    </main>
  </React.StrictMode>,
)
