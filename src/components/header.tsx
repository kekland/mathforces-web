import React from 'react'
import { Surface } from './surface'
import { Row, Spacer } from './flex'
import { Title } from './text'

export const Header: React.FC = () => {
  return (
    <div style={{ height: 64, paddingLeft: 24, paddingRight: 24 }}>
      <Row style={{ alignItems: 'center' }}>
        <Title>
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