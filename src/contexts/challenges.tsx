import React, { createContext, useContext, useState } from 'react'
import { CountdownContext } from './countdown'

export const ChallengeContext = createContext({})

export const ChallengeProvider: React.FC = ({}) => {
  const { challenge } = useContext(CountdownContext)

  const [level, setlevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  // function completeChallenge() {
  //   if (!challenge)
  // }

  return null
}