import React, { CSSProperties } from 'react'

export const Title: React.FC<{primary?: boolean, style?: CSSProperties}> = ({ children, primary, style }) => {
  return (
    <span style={{ fontSize: 20, fontWeight: 600, color: primary? 'var(--color-primary)' : 'var(--color-text)', ...style }}>
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