import styled from 'styled-components/native'

export const Header = styled.View`
  width: 100%;
  height: 20%;

  align-items: center;
  justify-content: center;
`

export const XP = styled.Text`
  font-size: 20px;
  color: #5965E0;
  font-weight: bold;
`

export const LineContainer = styled.View`
  width: 100%;
  height: 5%;
  align-items: center;
  justify-content: center;
`

export const Line = styled.View`
  border-bottom-width: 3px;
  border-color: #DCDDE0;
  height: 30px;
  width: 85%;
`



export const Body = styled.View`
  width: 100%;
  height: 60%;

  align-items: center;
  justify-content: center;

`

export const Title = styled.Text`
  margin-top: 15px;
  font-size: 20px;
  font-weight: bold;

  text-align: center;

  color: #666;
`

export const DescriptionChallenge = styled.Text`
  font-size: 16px;
  text-align: center;
  margin-top: 10px;

  color: #666;
`

export const Footer = styled.View`
  width: 100%;
  height: 20%;

  align-items: center;
  justify-content: center;

  flex-direction: row;
`

export const ContainerButtonLeft = styled.View`
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 5px;
`

export const ContainerButtonRight = styled.View`
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 5px;
`

export const Button = styled.TouchableOpacity`
  width: 90%;
  height: 45px;

  border-radius: 15px;

  align-items: center;
  justify-content: center;

  background-color: ${({ color }) => color};
`

export const TitleButton = styled.Text`
  font-size: 14px;

  color: #fff;
`
