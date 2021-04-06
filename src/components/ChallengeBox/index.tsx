import React from 'react'

// import LevelUp from '../../assets/svg/level_up'

import {
  Container,
  Header,
  HeaderText,
  Body,
  Button,
  ButtonText,
  Footer,
  FooterText
} from './styles'


export default function ChallengeBox () {
  return (
    <Container>
      <Header>
        <HeaderText>
          Inicie um ciclo para receber desafios a serem completados
        </HeaderText>
      </Header>
      <Body>
        <Button>
          <ButtonText>Iniciar ciclo</ButtonText>
        </Button>
      </Body>
      <Footer>
        {/* <LevelUp width={85} height={85} /> */}
        <FooterText>
          Complete-os e ganhe experiência para avançar de level
        </FooterText>
      </Footer>
    </Container>
  )
}