import React from 'react'
import { Surface } from './surface'
import { Column, Spacer, Row, Flexible } from './flex'
import { Title, Body, Subtitle } from './text'
import { Button } from './button'
import { LiveIconComponent } from './live-icon-component'

export const ContestComponent: React.FC<{ live?: boolean }> = ({ live }) => {
  return (
    <Surface rounded style={{ padding: 24 }}>
      <Column>
        <Row style={{ alignItems: 'center' }}>
          <Flexible>
            <Title>Открытие MathForces</Title>
          </Flexible>
          <Spacer size={16} />
          {live ? <LiveIconComponent /> : <div />}
        </Row>
        <Subtitle>3 мая 2020 17:05</Subtitle>
        <Spacer size={8} />
        <Body>Первый официальный раунд MathForces.</Body>
        <Spacer size={16} />
        <Button>Посмотреть</Button>
      </Column>
    </Surface>
  )
}