import React from 'react'
import { Header } from '../components/header'
import { Surface } from '../components/surface'

export const MainPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div style={{ padding: 24, maxWidth: 600 }}>
        <Surface style={{ padding: 12 }} rounded>
          Alih!
        </Surface>
      </div>
    </div>
  )
}