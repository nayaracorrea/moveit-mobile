import React from 'react'
import Svg, { Path } from 'react-native-svg'

export default function PlayArrow ({ width, height }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M8 5V19L19 12L8 5Z" fill="white"/>
    </Svg>
  )
}