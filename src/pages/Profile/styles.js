import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`


export const Header = styled.View`
  height: 35%;
  width: 100%;

  align-items: center;
  justify-content: flex-start;

  flex-direction: column;

  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;

  /* padding: 15px; */

  background-color: #5965E0;
`

export const HeaderInfoUser = styled.View`
  height: 50%;
  width: 100%;

  justify-content: center;

  /* background-color: #c4c4c4; */
`

export const Card = styled.View`
  width: 85%;
  height: 160px;

  background-color: #fff;

  margin-top: 10px;

  border-radius: 20px;

  shadow-opacity: 0.2;
  shadow-radius: 2px;
  shadow-color: #000;
  shadow-offset: 8px 8px;
  elevation: 3;
`

export const HeaderCard = styled.View`
  width: 100%;
  height: 30%;

  justify-content: center;
  align-items: center;

  
  border-bottom-width: 0.2px;
  border-bottom-color: #666;

  /* background-color: #fff; */
`

export const BodyCard = styled.View`
  width: 100%;
  height: 70%;

  justify-content: center;
  align-items: center;

  /* background-color: #c4c4c4; */
`

export const ChallengesCompleted = styled.Text`
  font-size: 16px;
  font-weight: bold;

  color: #5965E0;
`

export const Body = styled.View`
  height: 65%;
  width: 100%;
`

export const AccessButtonContainer = styled.View`
  height: 40%;
  width: 100%;

  /* background-color: #000; */

  margin-top: 80px;
`

export const LogoutContainer = styled.View`
  height: 35%;
  width: 100%;

  /* background-color: #c4c4c4; */

  justify-content: flex-end;
`

export const ButtonContainer = styled.View`
  height: 48px;
  width: 100%;
  margin-top: 1px;

  /* background-color: #000; */

  justify-content: center;
`

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 90%;

  flex-direction: row;

  align-items: center;

  padding: 20px;

  /* background-color: #fff; */
`

export const IconContainer = styled.View`
  height: 40px;
  width: 40px;

  border-radius: 60px;

  justify-content: center;
  align-items: center;

  background-color: #f2f2f2;
  opacity: 0.6;

  shadow-opacity: 0.2;
  shadow-radius: 2px;
  shadow-color: #000;
  shadow-offset: 8px 8px;
  elevation: 3;


`

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #666;

  margin-left: 12px;
`