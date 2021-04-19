import styled from 'styled-components/native'

export const CenteredView = styled.View`
  flex: 1;
  
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.6);

`

export const ModalView = styled.View`
  /* margin: 20px; */
  height: 40%;
  width: 70%;
  background-color: #fff;
  border-radius: 20px;
  /* padding: 35px; */
  
  align-items: center;
`

export const Header = styled.View`
  width: 100%;
  height: 20%;

  /* background-color: #000; */

  align-items: flex-end;
`

export const Body = styled.View`
  width: 100%;
  height: 80%;

  align-items: center;
  justify-content: center;

  /* background-color: red; */

  padding: 20px;
`

export const Close = styled.TouchableOpacity`
  width: 65px;
  height: 100%;

  align-items: center;
  justify-content: center;

  /* background-color: crimson; */
`

export const Level = styled.Text`
  font-size: 150px;
  font-weight: bold;
  bottom: 35px;
  margin-top: -150px;
  color: #5965E0;
`

export const CongratsText = styled.Text`
  font-size: 32px;
  font-weight: bold;
  top: -45px;
  color: #2E384D;
`

export const Description = styled.Text`
  font-size: 20px;
  font-weight: 100;
  top: -40px;
  color: #666666;
`