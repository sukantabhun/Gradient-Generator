import {StyledGradientDirectionItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {data, isSelected, onClick} = props
  const {displayText} = data

  return (
    <li>
      <StyledGradientDirectionItem isSelected={isSelected} onClick={onClick}>
        {displayText}
      </StyledGradientDirectionItem>
    </li>
  )
}

export default GradientDirectionItem
