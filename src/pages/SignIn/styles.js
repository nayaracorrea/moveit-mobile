import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  
  justify-content: center;
  align-items: center;

  background-color: #5965E0;
`

export const Body = styled.View`
  height: 90%;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const Footer = styled.View`
  height: 10%;
  width: 100%;

  align-items: center;
  justify-content: center;

  background-color: #5965E0;
`

export const Logo = styled.Image`
  height: 150px;
  width: 150px;
`

export const Title = styled.Text`
  font-size: 25px;
  color: #fff;

  margin-bottom: 15px;
`

export const Button = styled.TouchableOpacity`
  width: 40%;
  height: 50px;

  align-items: center;
  justify-content: center;

  border-radius: 15px;

  background-color: #fff;

  margin-top: 20px;
`

export const Login = styled.Text`
  font-size: 18px;
  font-weight: bold;

  color: #5965E0;

`

export const OptionText = styled.Text`
  font-size: 18px;
  margin-top: 8%;
  margin-bottom: 15px;

  color: #fff;
`

export const SignOut = styled.TouchableOpacity`
  height: 100%;
  width: 100%;

  align-items: center;
  justify-content: center;

  background-color: #fff;
`

export const SignOutText = styled.Text`
  color: #5965E0;

  font-size: 16px;
`

export const Error = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 3px;
  margin-top: 3px;
  text-align: center;
`