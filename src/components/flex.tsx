import React from 'react'

export const Flex: React.FC<{ type: 'row' | 'column', style?: React.CSSProperties }> = ({ type, style, children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: type, width: '100%', height: '100%', ...style }}>
      {children}
    </div>
  )
}

export const Column: React.FC<{ style?: React.CSSProperties }> = ({ style, children }) => {
  return (
    <Flex type='column' style={style}>
      {children}
    </Flex>
  )
}

export const Row: React.FC<{ style?: React.CSSProperties }> = ({ style, children }) => {
  return (
    <Flex type='row' style={style}>
      {children}
    </Flex>
  )
}

export const Spacer: React.FC<{ size?: number }> = ({ size }) => {
  return (
    <div style={{ flex: size ? `0 0 ${size}px` : '1' }} />
  )
}

export const Flexible: React.FC<{ flex?: number }> = ({ flex, children }) => {
  return (
    <div style={{ flex: flex ?? 1 }}>
      {children}
    </div>
  )
}