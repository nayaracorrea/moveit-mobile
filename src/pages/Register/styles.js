import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  
  justify-content: flex-start;
  align-items: center;

  background-color: #5965E0;
`

export const Body = styled.View`
  align-items: center;
  justify-content: center;
`

export const FormBody = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;

  margin-bottom: 3%;
`

export const Logo = styled.Image`
  height: 150px;
  width: 150px;
  margin-top: -15px;
`

export const Title = styled.Text`
  font-size: 25px;
  color: #fff;

  margin-top: -10px;
  margin-bottom: 10px;
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

export const RegisterText = styled.Text`
  font-size: 18px;
  font-weight: bold;

  color: #5965E0;

`

export const Error = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 3px;
  margin-top: 3px;
  text-align: center;
`