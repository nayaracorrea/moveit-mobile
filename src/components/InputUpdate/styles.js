import styled from 'styled-components/native'

export const Form = styled.View`
    background-color: rgba(255,255,255,0.65); 
    width: 80%;
    height: 45px; 
    border-radius: 15px;

    align-items: center;

    flex-direction: row;
    margin-bottom: 5px;
    margin-top: 10px;
`

export const InputArea = styled.View`
  flex: 1;
  height: 100%;
  justify-content: center;
  /* background-color: #000; */
`

export const IconArea = styled.TouchableOpacity`
  height: 100%;
  padding: 12px;
  background-color: ${({ color }) => color};

  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;

  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  padding-left: 15px;
  font-size: 16px;
`