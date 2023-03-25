import React from 'react'

const Button = ({ children, handleClick, isSecondary = false, isTertiary = false, classProp, type, isDisabled = false }) => {
    return <button 
              className={`border-2 border-primary py-3 px-8 rounded-md ${isSecondary ? "text-primary bg-white hover:filter hover:brightness-10 border-white" : "text-white bg-primary"} ${isTertiary ? "border-white text-white bg-[transparent]" : ""} font-bold text-md cursor-pointer drop-shadow-md hover:filter hover:brightness-75 duration-300 ${isDisabled && "cursor-not-allowed bg-primary/30 border-primary/30"} ${classProp}`} 
              onClick={handleClick}
              type={type}
              disabled={isDisabled}
            > 
                {children} 
            </button>
  }
  
  export default Button