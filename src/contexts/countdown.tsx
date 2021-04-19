import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import challenges from '../../challenges.json'
import { ChallengeContext } from './challenges';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface CountdownContextData {
  minutes: number;
  seconds: number;
  isActive: boolean;
  // challenge: boolean;
  // activeChallenge: Challenge;
  // level: number;
  // currentExperience: number;
  // experienceToNextLevel: number;
  // challengesCompleted: number;
  startCountdown(): void;
  resetCountdown(): void;
  // completeChallenge(): void;
}

interface ChallengesProviderProps {
  children?: ReactNode;
  // level: number;
  // currentExperience: number;
  // challengesCompleted: number;
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;

const CountdownProvider = ({ children }: ChallengesProviderProps) => {
  const { startNewChallenge } = useContext(ChallengeContext)

  const [isActive, setIsActive] = useState(false)
  const [time, setTime] = useState(0.1 * 60)
  // const [challenge, setChallenge] = useState(false)

  // const [activeChallenge, setActiveChallenge] = useState<any>(null);

  // const [level, setLevel] = useState(rest.level ?? 1);
  // const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  // const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);

  // const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  function startCountdown() {
    setIsActive(true)
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(0.1 * 60)
  }

  useEffect(() => {
    if (isActive === true && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive === true && time === 0) {
      // console.log('Acabou!')
      startNewChallenge()
      // setChallenge(true)
      // startNewChallenge()
    }
  }, [isActive, time])

  //Challenges

  // function startNewChallenge() {
  //   const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
  //   const challenge = challenges[randomChallengeIndex]

  //   setActiveChallenge(challenge)
  // }

  // function levelUp() {
  //   setLevel(level + 1)
  // }



  // function completeChallenge() {
  //   if (!isActive) {
  //     return;
  //   }

  //   const { amount } = activeChallenge

  //   let finalExperience = currentExperience + amount

  //   if (finalExperience >= experienceToNextLevel) {
  //     finalExperience = finalExperience - experienceToNextLevel
  //     levelUp()
  //   }

  //   setChallenge(false)
  //   setActiveChallenge(null)
  //   setCurrentExperience(finalExperience)
  //   setChallengesCompleted(challengesCompleted + 1)
  //   resetCountdown()
  // }

  return (
    <CountdownContext.Provider 
      value={{ 
        minutes, 
        seconds, 
        isActive, 
        startCountdown, 
        resetCountdown}}>
      {children}
    </CountdownContext.Provider>
  )
}

export default CountdownProvider