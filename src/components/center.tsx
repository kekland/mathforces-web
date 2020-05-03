import React from 'react'
import { Row } from './flex'

export const Center: React.FC = ({children}) => {
  return (
    <Row style={{justifyContent: 'center', alignItems: 'center'}}>
      {children}
    </Row>
  )
}