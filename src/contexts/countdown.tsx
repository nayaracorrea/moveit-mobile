import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'

import { ChallengeContext } from './challenges'


interface CountdownContextData {
  minutes: number;
  seconds: number;
  isActive: boolean;
  startCountdown(): void;
  resetCountdown(): void;
}

interface ChallengesProviderProps {
  children?: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;

const CountdownProvider = ({ children }: ChallengesProviderProps) => {
  const { startNewChallenge } = useContext(ChallengeContext)

  const [isActive, setIsActive] = useState(false)
  const [time, setTime] = useState(0.1 * 60)

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
    }
  }, [isActive, time])



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