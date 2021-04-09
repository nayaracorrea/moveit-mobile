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
  const { completeChallenge, activeChallenge } = useContext(CountdownContext)

  return (
    <>
      <Header>
        <XP>Ganhe {activeChallenge.amount} xp</XP>
        <LineContainer>
          <Line />
        </LineContainer>
      </Header>
      <Body>
        {activeChallenge.type === 'body' ? (
          <BodyImage width={100} height={100} />
        ) : (
          <Eye width={100} height={100} />
        )}
        
        <Title>Exercite-se</Title>
        <DescriptionChallenge>{activeChallenge.description}</DescriptionChallenge>
      </Body>
      <Footer>
        <ContainerButtonLeft>
          <Button color='#E83F5B'>
            <TitleButton>Falhei</TitleButton>
          </Button>
        </ContainerButtonLeft>
        <ContainerButtonRight>
          <Button color='#4CD62B' onPress={completeChallenge}>
            <TitleButton>Completei</TitleButton>
          </Button>
        </ContainerButtonRight>
      </Footer>
    </>
  )
}