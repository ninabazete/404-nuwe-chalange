import React from "react";
import '../components/style/buttons.css'

const STYLES = [
 'btn--primary--solid',
 'btn--primary--solid'
]


const Button = ({
 children, 
 type, 
 onClick, 
 buttonStyle
}) => {

const setButtonStyle = STYLES.includes(buttonStyle) 
 ? buttonStyle 
 : STYLES[0];

return (
 <button 
  className={`btn ${setButtonStyle}`} 
  onClick={onClick} 
  type={type}>
      
  {children}
  
 </button>
 )
};

export default Button;


    
      
    
   