// styledComponents.js
import styled from 'styled-components'

export const StyledGradientDirectionItem = styled.button`
  padding: 8px 16px;
  margin: 4px;
  background-color: ${({isSelected}) => (isSelected ? '#ccc' : '#ffffff')};
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  opacity: ${({isSelected}) => (isSelected ? 1 : 0.5)};
`
