import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/auth'


import SplashScreen from '../pages/SplashScreen'
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

const Routes: React.FC = () => {
  const { signed } = useContext(AuthContext)
  const [splash, setSplash] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setSplash(false)
    }, 2000)
  })

  return splash ? (
    <SplashScreen />
  ) : (
    <>
      {signed ? (
        <AppRoutes />
      ) : (
        <AuthRoutes />
      )}
    </>
    
    
  )
}

export default Routes