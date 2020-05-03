import React from 'react'
import { Row, Spacer } from './flex'
import { Title } from './text'

export const Header: React.FC = () => {
  return (
    <div style={{ height: 64, paddingLeft: 24, paddingRight: 24, position: 'sticky', top: 0, backgroundColor: 'var(--color-background)' }}>
      <Row style={{ alignItems: 'center' }}>
        <div style={{ width: 36, height: 36, backgroundColor: 'var(--color-primary)', borderRadius: 12 }} />
        <Spacer size={12} />
        <Title primary>
          MathForces
        </Title>
        <Spacer />
        <a href='/'>Блог</a>
        <Spacer size={24} />
        <a href='/'>Пользователи</a>
        <Spacer size={24} />
        <a href='/'>Олимпиады</a>
        <Spacer size={24} />
        <a href='/'>Задачи</a>
      </Row>
    </div>
  )
}