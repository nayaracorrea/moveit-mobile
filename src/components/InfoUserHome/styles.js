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
  height: 10%;
  width: 20%;
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
`

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
`

export const LevelContainer = styled.View`
  flex-direction: row;
  margin-top: 4px; 
`

export const Level = styled.Text`
  font-size: 14px; 
  margin-left: 2%;
  top: 4%;
`