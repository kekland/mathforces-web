import React from 'react'
import { Center } from './center'

export const LiveIconComponent: React.FC = () => {
  return (
    <div style={{ width: 18, height: 18, borderRadius: 9, backgroundColor: 'rgba(255, 50, 67, 0.5)' }}>
      <Center>
        <div style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: '#ff3243' }} />
      </Center>
    </div>
  )
}