import React from 'react'

import PlayArrow from '../../../../assets/svg/play_arrow'
import LevelUp from '../../../../assets/svg/level_up'

import {
  Header,
  HeaderText,
  Body,
  Button,
  ButtonText,
  Footer,
  FooterContainerIcon,
  FooterContainerText,
  FooterText
} from './styles'

interface InitialProps {
  click(): void;
}

export default function InitialBox({click}: InitialProps) {
  return (
    <>
      <Header>
        <HeaderText>
          Inicie um ciclo para receber desafios a serem completados
        </HeaderText>
      </Header>
      <Body>
        <Button onPress={click}>
          <ButtonText>Iniciar ciclo</ButtonText>
          <PlayArrow width={20} height={20} />
        </Button>
      </Body>
      <Footer>
        <FooterContainerIcon>
          <LevelUp width={85} height={85} />
        </FooterContainerIcon>
        <FooterContainerText>
          <FooterText>
            Complete-os e ganhe experiência para avançar de level
          </FooterText>
        </FooterContainerText>
      </Footer>
    </>
  )
}