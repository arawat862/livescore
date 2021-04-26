import React from 'react'
import './Stylesheet.css';


export const Footer = () => {
    let footerStyle ={
        position: "relative",
        top: "80vh",
        width: "100%",
    }

    return (
       <footer className="bg-dark text-light py3" style={footerStyle}>
           <p className="text-center">
           Copyright &copy; LiveScore.com
           </p>
          
       </footer>
        
    )
}
