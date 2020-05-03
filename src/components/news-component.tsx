import React from 'react'
import { Surface } from './surface'
import { Column, Spacer } from './flex'
import { Title, Body, Subtitle } from './text'
import { Button } from './button'

export const NewsComponent: React.FC = () => {
  return (
    <Surface rounded style={{padding: 24}}>
      <Column>
        <Title>Результаты первой олимпиады</Title>
        <Subtitle><a href='/'>Mathforces</a> 3 мая 2020 17:05</Subtitle>
        <Spacer size={8} />
        <Body>Про падение сервера, победителей и новую систему рейтинга.</Body>
        <Spacer size={16} />
        <Button>Подробнее</Button>
      </Column>
    </Surface>
  )
}