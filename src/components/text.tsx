import React from 'react'

export const Title: React.FC = ({ children }) => {
  return (
    <span style={{ fontSize: 20, fontWeight: 600 }}>
      {children}
    </span>
  )
}

export const Body: React.FC = ({ children }) => {
  return (
    <span style={{ fontSize: 16, fontWeight: 400 }}>
      {children}
    </span>
  )
}

export const Subtitle: React.FC = ({ children }) => {
  return (
    <span style={{ fontSize: 14, fontWeight: 400, color: 'var(--color-text-muted)' }}>
      {children}
    </span>
  )
}