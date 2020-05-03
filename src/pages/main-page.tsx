import React from 'react'
import { Header } from '../components/header'
import { NewsComponent } from '../components/news-component'
import { Spacer, Column } from '../components/flex'

export const MainPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Column style={{ padding: 24, maxWidth: 600 }}>
        <NewsComponent />
        <Spacer size={24} />
        <NewsComponent />
        <Spacer size={24} />
        <NewsComponent />
        <Spacer size={24} />
        <NewsComponent />
        <Spacer size={24} />
        <NewsComponent />
        <Spacer size={24} />
        <NewsComponent />
      </Column>
    </div>
  )
}