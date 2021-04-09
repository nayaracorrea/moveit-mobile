import React, { createContext, useEffect, useState } from 'react'

interface CountdownContextData {
  minutes: number;
  seconds: number;
  isActive: boolean;
  challenge: boolean;
  startCountdown(): void;
  resetCountdown(): void;
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;

export const CountdownProvider: React.FC = ({ children }) => {
  const [isActive, setIsActive] = useState(false)
  const [time, setTime] = useState(0.1 * 60)
  const [challenge, setChallenge] = useState(false)

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
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setChallenge(true)
    }
  }, [isActive, time])

  return (
    <CountdownContext.Provider value={{ minutes, seconds, isActive, challenge, startCountdown, resetCountdown }}>
      {children}
    </CountdownContext.Provider>
  )
}