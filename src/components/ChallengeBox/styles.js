import styled from 'styled-components/native'

export const Container = styled.View`
  width: 85%; 
  height: 90%;
  background-color: #fff;
  border-radius: 15px; 
  align-items: center;
  justify-content: center;
  padding: 15px;
`

export const Header = styled.View`
  width: 100%;
  height: 33.33%; 
  background-color: #fff; 
  justify-content: center; 
  align-items: center;
`

export const HeaderText = styled.Text`
  font-size: 14px;
  text-align: center;
`

export const Body = styled.View`
  width: 100%;
  height: 33.33%; 
  background-color: #fff; 
  justify-content: center;
  align-items: center;
`

export const Button = styled.TouchableOpacity`
  height: 6%;
  width: 10%;
  background-color: #5965E0;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`

export const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold; 
  color: #fff;
`

export const Footer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 33.33%; 
  background-color: #fff;
  justify-content: center;
  align-items: center;
`

export const FooterText = styled.Text`
  font-size: 16px; 
  text-align: center; 
  margin-left: 2%;
`