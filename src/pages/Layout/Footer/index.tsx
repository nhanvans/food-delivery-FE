import React from 'react'
import './footer.scss'
import { Container } from 'react-bootstrap'

const index = () => {
  return (
    <div
      style={{
        backgroundColor: '#000',
        zIndex: 100,
        display: 'block',
        clear: 'both'
      }}
    >
      <Container>footer</Container>
    </div>
  )
}

export default index
