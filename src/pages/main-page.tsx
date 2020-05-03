import React from 'react'
import { Header } from '../components/header'
import { NewsComponent } from '../components/news-component'
import { Spacer, Column, Row } from '../components/flex'
import { ContestComponent } from '../components/contest-component'
import { Title } from '../components/text'

export const MainPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Row style={{justifyContent: 'center'}}>
        <Column style={{ padding: 24, maxWidth: 600 }}>
          <Title style={{color: 'var(--color-text-muted)'}}>Новости</Title>
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
          <Spacer size={24} />
          <NewsComponent />
        </Column>
        <Column style={{ padding: 24, maxWidth: 424 }}>
          <Title style={{color: 'var(--color-text-muted)'}}>Текущие олимпиады</Title>
          <Spacer size={24} />
          <ContestComponent live />
          <Spacer size={24} />
          <Title style={{color: 'var(--color-text-muted)'}}>Предстоящие олимпиады</Title>
          <Spacer size={24} />
          <ContestComponent />
          <Spacer size={24} />
          <ContestComponent />
          <Spacer size={24} />
          <Title style={{color: 'var(--color-text-muted)'}}>Прошедшие олимпиады</Title>
          <Spacer size={24} />
          <ContestComponent />
          <Spacer size={24} />
          <ContestComponent />
          <Spacer size={24} />
          <ContestComponent />
        </Column>
      </Row>
    </div>
  )
}