import React from 'react'

export const Title: React.FC = ({ children }) => {
  return (
    <span style={{ fontSize: 20, fontWeight: 600 }}>
      {children}
    </span>
  )
}