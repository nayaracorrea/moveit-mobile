import React, { useContext } from 'react'

import Eye from '../../../../assets/svg/eye'
import BodyImage from '../../../../assets/svg/body'
import LevelUpModal from '../../LevelUpModal'
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
import { ChallengeContext } from '../../../contexts/challenges'

interface CountdownProps {
  click(): void;
}

export default function Challenges() {
  const { activeChallenge, isLevelUpModalOpen, level, saveLevel, resetChallenge, completeChallenge } = useContext(ChallengeContext)
  const { resetCountdown } = useContext(CountdownContext)


  function handleChallengeSucceeded() {
    completeChallenge()
    // saveLevel(level)
    resetCountdown()
  }

  function handleChallengeFailed() {
    resetChallenge()
    resetCountdown()
  }

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
          <Button color='#E83F5B' onPress={handleChallengeFailed}>
            <TitleButton>Falhei</TitleButton>
          </Button>
        </ContainerButtonLeft>
        <ContainerButtonRight>
          <Button color='#4CD62B' onPress={handleChallengeSucceeded}>
            <TitleButton>Completei</TitleButton>
          </Button>
        </ContainerButtonRight>
      </Footer>

      {/* <LevelUpModal /> */}
    </>
  )
}