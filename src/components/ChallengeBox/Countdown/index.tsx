import React, { useContext } from 'react'

import Close from '../../../../assets/svg/close'
import { CountdownContext } from '../../../contexts/countdown'

import {
  Header,
  Title,
  Body,
  BoxTimeLeft,
  BoxTimeRight,
  Time,
  SeparatorContainer,
  Separator,
  Footer,
  Button,
  ButtonText
} from './styles'

interface CountdownProps {
  click(): void;
}

export default function Countdown({click}: CountdownProps) {
  const { minutes, seconds } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');


  return (
    <>
      <Header>
        <Title>Contagem regressiva para o próximo desafio!</Title>
      </Header>
      <Body>
        <BoxTimeLeft>
          <Time>{minuteLeft}</Time>
        </BoxTimeLeft>
        <BoxTimeRight>
          <Time>{minuteRight}</Time>
        </BoxTimeRight>
        <SeparatorContainer>
          <Separator>:</Separator>
        </SeparatorContainer>
        <BoxTimeLeft>
          <Time>{secondsLeft}</Time>
        </BoxTimeLeft>
        <BoxTimeRight>
          <Time>{secondsRight}</Time>
        </BoxTimeRight>
      </Body>
      <Footer>
        <Button onPress={click}>
          <ButtonText>Abandonar ciclo</ButtonText>
          <Close width={30} height={30} />
        </Button>
      </Footer>
    </>
  )
}