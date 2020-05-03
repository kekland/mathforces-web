import React from 'react'

export const Surface: React.FC<{ style?: React.CSSProperties, rounded?: boolean }> = ({ children, style, rounded }) => {
  return (
    <div className='surface' style={{
      backgroundColor: 'var(--color-surface)',
      borderRadius: rounded ? 12 : 0,
      ...style
    }}>
      {children}
    </div>
  )
}