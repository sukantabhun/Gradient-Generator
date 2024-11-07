import styled from 'styled-components'

export const StyledGradientElement = styled.form`
  background-image: linear-gradient(
    to ${({formData}) => formData.selectedDirection},
    ${({formData}) => formData.color1},
    ${({formData}) => formData.color2}
  );
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 20px;
  box-sizing: border-box;
`
