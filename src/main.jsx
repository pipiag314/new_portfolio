import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from "react-hot-toast"
import { MobileContextProvider } from './context/MobileContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MobileContextProvider>
      <App />
      <Toaster 
        position='top-center'
        toastOptions={{
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
    </MobileContextProvider>
  </React.StrictMode>,
)
