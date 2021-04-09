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
  justify-content: center;

  flex-direction: column;

  background-color: #5965E0;
`

export const HeaderInternal = styled.View`
  height: 50%;
  width: 100%;

  align-items: center;
  justify-content: center;
`

export const Body = styled.View`
  height: 65%;
  width: 100%;
`

export const AccessButtonContainer = styled.View`
  height: 84%;
  width: 100%;
`

export const LogoutContainer = styled.View`
  height: 16%;
  width: 100%;
`

export const Separator = styled.View`
  width: 90%;
  height: 1px;

  margin-left: 15px;

  background-color: #000;
`

export const ButtonContainer = styled.View`
  height: 70px;
  width: 100%;
  margin-top: 2px;

  /* background-color: #000; */

  justify-content: center;
`

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 90%;

  flex-direction: row;

  align-items: center;

  padding: 15px;
`

export const ButtonText = styled.Text`
  font-size: 20px;
  color: #666;

  margin-left: 12px;
`