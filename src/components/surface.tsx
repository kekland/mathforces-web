import React from 'react'

export const Surface: React.FC<{style?: React.CSSProperties, rounded?: boolean}> = ({ children, style, rounded }) => {
  return (
    <div style={{
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
      backgroundColor: 'var(--color-surface)',
      borderRadius: rounded? 12 : 0,
      ...style}}>
      {children}
    </div>
  )
}