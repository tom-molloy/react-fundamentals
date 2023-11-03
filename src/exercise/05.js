// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({style, ...props}) => {
  let sizeClass = null
  switch (props.size) {
    case 'large':
      sizeClass = 'box--large'
      break
    case 'medium':
      sizeClass = 'box--medium'
      break
    default:
      sizeClass = 'box--small'
      break
  }
  return (
    <div
      className={`box ${sizeClass}`}
      style={{fontStyle: 'italic', ...style}}
      {...props}
    />
  )
}

const smallBox = (
  <Box size="small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box size="medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box size="large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
