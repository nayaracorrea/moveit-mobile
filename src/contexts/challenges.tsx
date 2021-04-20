import AsyncStorage from '@react-native-community/async-storage'
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import LevelUp from '../../assets/svg/level_up'
import challenges from '../../challenges.json'
import LevelUpModal from '../components/LevelUpModal'
import { AuthContext } from './auth'

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengeContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  experienceToNextLevel: number;
  activeChallenge: Challenge;
  isLevelUpModalOpen: boolean;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
  saveLevel(dataChallenge: number): Promise<void>;
  resetInfoChallenges: () => void;
  deleteData: () => void;
}

interface ChallengeProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const ChallengeContext = createContext({} as ChallengeContextData)

const ChallengeProvider = ({ children, ...rest }: ChallengeProviderProps) => {
  const { signOut } = useContext(AuthContext)

  const [level, setlevel] = useState(rest.level ?? 1)
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0)
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0)

  const [activeChallenge, setActiveChallenge] = useState<any>(null)
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

  const [save, isSaved] = useState(false)
  const [saveChallengesCompleted, isSaveChallengesCompleted] = useState(false)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  function levelUp() {
    // setlevel(level + 1)
    saveLevel(level + 1)
    setIsLevelUpModalOpen(true)
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false)
  }


  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge

    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel
      levelUp()
    }

    // if (!level) {
    //   saveLevel()
    // }

    // setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    // setChallengesCompleted(challengesCompleted + 1)
    saveChallenges(challengesCompleted + 1)
    saveCurrentExperience(finalExperience)

  }


  //Salvar o level do usuário

  const saveLevel = async (levelUser) => {
    try {
      await AsyncStorage.setItem('@RN:level', JSON.stringify(levelUser))
      isSaved(true)
    } catch (e) {
      console.log(e.message)
    }
  }

  const showLevel = async () => {
    try {
      const infoLevel = await AsyncStorage.getItem('@RN:level')

      if (infoLevel !== null) {
        let dataLevel = JSON.parse(infoLevel)
        setlevel(dataLevel)
        console.log(dataLevel)
      } else {
        setlevel(level)
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  showLevel()

  useEffect(() => {
    showLevel()
    isSaved(false)
  }, [level])


  //Salvar a experiência do usuário


  const saveCurrentExperience = async (experienceUser) => {
    try {
      await AsyncStorage.setItem('@RN:experience', JSON.stringify(experienceUser))
      isSaved(true)
    } catch (e) {
      console.log(e.message)
    }
  }

  const showExperienceUser = async () => {
    try {
      const infoExperience = await AsyncStorage.getItem('@RN:experience')

      if (infoExperience !== null) {
        let experience = JSON.parse(infoExperience)
        setCurrentExperience(experience)
        console.log(experience)
      } else {
        setCurrentExperience(currentExperience)
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  showExperienceUser()

  useEffect(() => {
    showExperienceUser()
    isSaved(false)
  }, [save === true])


  //Salvar os desafios completos

  const saveChallenges = async (challengesCompletedUser) => {
    try {
      await AsyncStorage.setItem('@RN:challengesCompleted', JSON.stringify(challengesCompletedUser))
      isSaveChallengesCompleted(true)
    } catch (e) {
      console.log(e.message)
    }
  }

  const showChallengesCompleted = async () => {
    try {
      const infoChallengesCompleted = await AsyncStorage.getItem('@RN:challengesCompleted')

      if (infoChallengesCompleted !== null) {
        let challenges = JSON.parse(infoChallengesCompleted)
        setChallengesCompleted(challenges)
        console.log(challenges)
      } else {
        setChallengesCompleted(challengesCompleted)
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  showChallengesCompleted()

  useEffect(() => {
    showChallengesCompleted()
    isSaveChallengesCompleted(false)
  }, [saveChallengesCompleted === true])

  const resetLevel = async () => {
    try {
      await AsyncStorage.setItem('@RN:level', JSON.stringify(1))
      isSaved(true)
    } catch (e) {
      console.log(e.message)
    }
  }

  const resetCurrentExperience = async () => {
    try {
      await AsyncStorage.setItem('@RN:experience', JSON.stringify(0))
      isSaved(true)
    } catch (e) {
      console.log(e.message)
    }
  }

  const resetChallengesCompleted = async () => {
    try {
      await AsyncStorage.setItem('@RN:challengesCompleted', JSON.stringify(0))
      isSaveChallengesCompleted(true)
    } catch (e) {
      console.log(e.message)
    }
  }

  function resetInfoChallenges() {
    resetLevel()
    resetCurrentExperience()
    resetChallengesCompleted()
    // alert('Dados restaurados com sucesso')
  }

  const deleteData = async () => {
    try {
      await AsyncStorage.clear()
      // signOut()
      // alert('Dados deletados com sucesso!')
    } catch (e) {
      // alert('Não foi possível deletar os seus dados.')
      console.log(e.message)
    }
  }


  return (
    <ChallengeContext.Provider value={{
      level,
      currentExperience,
      challengesCompleted,
      experienceToNextLevel,
      activeChallenge,
      isLevelUpModalOpen,
      startNewChallenge,
      resetChallenge,
      completeChallenge,
      closeLevelUpModal,
      saveLevel,
      resetInfoChallenges,
      deleteData
    }}>
      {children}

      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengeContext.Provider>
  )
}

export default ChallengeProvider