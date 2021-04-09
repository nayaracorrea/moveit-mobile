import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  justify-content: center;
`

export const SubContainer = styled.View`
  flex-direction: row;
  width: 100%; 
  align-items: center;
`

export const AvatarContainer = styled.View`
  height: 60px;
  width: 60px;
  background-color: #f4f4f4;
  border-radius: 60px;
  margin-left: 6%;
`

export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 60px;
`

export const NameContainer = styled.View`
  margin-left: 15px;
  margin-bottom: 10px;
`

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
`

export const LevelContainer = styled.View`
  flex-direction: row;
  top: 7px; 
`

export const Level = styled.Text`
  font-size: 14px; 
  margin-left: 2%;
  top: -1px;
`