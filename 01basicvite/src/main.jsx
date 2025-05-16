import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const reactElement  = {
    type : 'a',
    props : {
        href: "https://www.google.com/",
        target: "_blank",
    },
    children : 'Click me to visit Google'
};

const AnotherElement  = (
    <a href="https://www.google.com/" target="_blank">Click me to visit Google</a>
)

const areactElement  = React.createElement(
    'a',
    {
        href: "https://www.google.com/",
        target: "_blank"
    },
    'Click me to visit Google'
)

createRoot(document.getElementById('root')).render(
  
   
    <App />
  
)
