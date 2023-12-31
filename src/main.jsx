import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BooksProvider } from './context/book.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BooksProvider>
    <App />
  </BooksProvider>
)
