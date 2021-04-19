import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
`

export const Header = styled.View`
  height: 40%;
  width: 100%;

  align-items: center;
  justify-content: center; 
`

export const Body = styled.View`
  height: 60%;
  width: 100%;

  align-items: center;
  justify-content: flex-start;

  padding-top: 15px; 
`


export const AvatarContainer = styled.View`
  height: 150px;
  width: 150px;
  background-color: #f4f4f4;
  border-radius: 90px;
`

export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 90px;
`

export const UpdateAvatar = styled.TouchableOpacity`
  width: 45px;
  height: 45px;

  border-radius: 60px;

  align-items: center;
  justify-content: center;

  top: -40px;
  left: 60%;

  background-color: #fff;
`

export const Button = styled.TouchableOpacity`
  width: 40%;
  height: 50px;

  align-items: center;
  justify-content: center;

  border-radius: 15px;

  background-color: #5965E0;

  margin-top: 20px;
`

export const UpdateText = styled.Text`
  font-size: 18px;
  font-weight: bold;

  color: #fff;
`