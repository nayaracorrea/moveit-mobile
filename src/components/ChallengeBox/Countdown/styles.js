import styled from 'styled-components/native'

export const Header = styled.View`
  width: 100%;
  height: 20%;

  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;

  text-align: center;

  color: #666;
`

export const Body = styled.View`
  width: 100%;
  height: 60%;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const BoxTimeLeft = styled.View`
  width: 60px;
  height: 140px;
  background-color: #5F67B7;
  align-items: center;
  justify-content: center;
  margin-right: 1.5px;
  margin-left: 1.5px;

  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`

export const BoxTimeRight = styled.View`
  width: 60px;
  height: 140px;
  background-color: #5F67B7;
  align-items: center;
  justify-content: center;
  margin-right: 1.5px;
  margin-left: 1.5px;

  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`

export const Time = styled.Text`
  font-size: 80px;
  font-weight: bold;
  color: #fff;
`

export const SeparatorContainer = styled.View`
  align-items: center;
  justify-content: center;
`

export const Separator = styled.Text`
  font-size: 60px;
  color: #666;
  margin-right: 1px;
  margin-left: -1px;
`

export const Footer = styled.View`
  width: 100%;
  height: 20%;

  align-items: center;
  justify-content: center;
`

export const Button = styled.TouchableOpacity`
  height: 45px;
  width: 80%;
  background-color: #E83F5B;
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