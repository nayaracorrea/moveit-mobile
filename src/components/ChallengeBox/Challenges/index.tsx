import React, { useContext } from 'react'

import Eye from '../../../../assets/svg/eye'
import BodyImage from '../../../../assets/svg/body'
import { CountdownContext } from '../../../contexts/countdown'

import {
  Header,
  XP,
  LineContainer,
  Line,
  Title,
  Body,
  DescriptionChallenge,
  Footer,
  ContainerButtonLeft,
  ContainerButtonRight,
  Button,
  TitleButton
} from './styles'

interface CountdownProps {
  click(): void;
}

export default function Challenges() {


  return (
    <>
      <Header>
        <XP>Ganhe 200 xp</XP>
        <LineContainer>
          <Line />
        </LineContainer>
      </Header>
      <Body>
        <Eye width={100} height={100} />
        <Title>Exercite-se</Title>
        <DescriptionChallenge>Caminhe por 3 minutos e estique suas pernas pra você ficar saudável.</DescriptionChallenge>
      </Body>
      <Footer>
        <ContainerButtonLeft>
          <Button color='#E83F5B'>
            <TitleButton>Falhei</TitleButton>
          </Button>
        </ContainerButtonLeft>
        <ContainerButtonRight>
          <Button color='#4CD62B'>
            <TitleButton>Completei</TitleButton>
          </Button>
        </ContainerButtonRight>
      </Footer>
    </>
  )
}