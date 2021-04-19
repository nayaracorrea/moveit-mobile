import styled from 'styled-components/native'

export const Container = styled.View`
 display: flex;
 align-items: center;
 flex-direction: row;
 justify-content: center;
 padding-left: 15px;
 padding-right: 15px;

 width: 90%;
 height: 85%;
 /* background-color: #fff; */
`

export const InitialValueExpBar = styled.Text`
 font-size: 16px;
 color: #fff;
`

export const FinalValueExpBar = styled.Text`
 font-size: 16px;
 color: #fff;
`

export const LineExternalContainer = styled.View`
 flex: 1;
 height: 8px;
 /* width: 90%; */
 border-radius: 4px;
 background: #dcdde0;
 position: relative;
 margin: 0 20px;
`

export const LineInternalContainer = styled.View`
 height: 8px;
 border-radius: 4px;
 background: #4cd62b;
`