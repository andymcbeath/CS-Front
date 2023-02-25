import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "http://caught-back-db.fly.dev";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
