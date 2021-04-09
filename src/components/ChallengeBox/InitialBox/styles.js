import styled from 'styled-components/native'

export const Header = styled.View`
  width: 100%;
  height: 33.33%; 
  background-color: #fff; 
  justify-content: center; 
  align-items: center;
`

export const HeaderText = styled.Text`
  font-size: 26px;
  text-align: center;
  font-weight: bold;

  color: #666;
`

export const Body = styled.View`
  width: 100%;
  height: 33.33%; 
  background-color: #fff; 
  justify-content: center;
  align-items: center;
`

export const Button = styled.TouchableOpacity`
  height: 45px;
  width: 80%;
  background-color: #5965E0;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
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

export const FooterContainerIcon = styled.View`
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 100%;
`

export const FooterContainerText = styled.View`
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 100%;
`

export const FooterText = styled.Text`
  font-size: 18px; 
  text-align: center;
  color: #666;
`