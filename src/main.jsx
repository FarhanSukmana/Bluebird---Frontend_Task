import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom';
import store from './Fetching/store.js'
import './index.css'
import Navbar from './Component/Navbar.jsx'
import Main from './Component/Main.jsx'
import Footer from './Component/Footer.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <Navbar/>
      <Main/>
      <Footer/>
    </Router>
  </Provider>,
)
