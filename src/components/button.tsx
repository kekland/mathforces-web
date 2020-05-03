import React from 'react'

export const Button: React.FC<{style?: React.CSSProperties}> = ({children, style}) => {
  return (
    <button style={{...style}}>
      {children}
    </button>
  )
}