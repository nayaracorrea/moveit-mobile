import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/auth'

import SplashScreen from '../pages/SplashScreen'
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

const Routes = () => {
  const { signed } = useContext(AuthContext)
  const [splash, setSplash] = useState(true)
  const [auth, isAuth] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setSplash(false)
    }, 2000)
  })


  if (splash) {
    return <SplashScreen />
  }


  return signed ? (<AppRoutes />) : (<AuthRoutes />)

}

export default Routes