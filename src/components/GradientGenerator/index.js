import {useState} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {StyledGradientElement} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

const GradientGenerator = () => {
  const [tempDirection, setTempDirection] = useState('top')
  const [color1, setColor1] = useState('#8ae323')
  const [color2, setColor2] = useState('#014f7b')
  const [formData, setFormData] = useState({
    selectedDirection: 'top',
    color1: '#8ae323',
    color2: '#014f7b',
  })

  const onClickSubmit = event => {
    event.preventDefault()
    setFormData({
      selectedDirection: tempDirection,
      color1,
      color2,
    })
  }

  const handleChange = direction => {
    setTempDirection(direction) // Only update tempDirection without affecting formData
  }

  return (
    <StyledGradientElement
      formData={formData}
      data-testid="gradientGenerator"
      onSubmit={onClickSubmit}
    >
      <h1>Generate a CSS Color Gradient</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <p>Choose Direction</p>
        <ul
          style={{
            listType: 'none',
          }}
        >
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              key={eachItem.directionId}
              data={eachItem}
              isSelected={eachItem.value === tempDirection}
              onClick={() => handleChange(eachItem.value)}
            />
          ))}
        </ul>

        <p>Pick The Colors</p>
        <div style={{display: 'flex', columnGap: '24px'}}>
          <div>
            <p htmlFor="color1">{color1}</p>
            <input
              type="color"
              id="color1"
              value={color1}
              onChange={e => setColor1(e.target.value)}
            />
          </div>
          <div>
            <p htmlFor="color2">{color2}</p>
            <input
              id="color2"
              type="color"
              value={color2}
              onChange={e => setColor2(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          style={{
            color: 'black',
            backgroundColor: '#00c9b7',
            fontSize: '24px',
            padding: '10px',
            paddingTop: '25px',
            paddingRight: '25px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            margin: '24px',
          }}
        >
          Generate Gradient
        </button>
      </div>
    </StyledGradientElement>
  )
}

export default GradientGenerator
