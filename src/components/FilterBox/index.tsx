import React, { useState } from 'react'
import { Button, Collapse, Container, Form, Row } from 'react-bootstrap'

import './FilterBox.scss'

type ItemFilter = {
  name: string
}

type Props = {
  title: string
  data: [ItemFilter]
  showMore?: [ItemFilter]
}

const FilterBox = ({ title, data, showMore, ...props }: Props) => {
  const [isShowMore, setShowMore] = useState(false)
  return (
    <Container className='filter-box'>
      <p className='filter-title'>{title}</p>
      <Row>
        {data.map((item) => (
          <Form.Group key={item.name} className='mb-2' controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label={item.name} />
          </Form.Group>
        ))}
        {showMore ? (
          <>
            <Collapse in={isShowMore}>
              <div id='example-collapse-text'>
                {showMore.map((item) => (
                  <Form.Group key={item.name} className='mb-2' controlId='formBasicCheckbox'>
                    <Form.Check type='checkbox' label={item.name} />
                  </Form.Group>
                ))}
              </div>
            </Collapse>
            <Button
              onClick={() => setShowMore(!isShowMore)}
              aria-controls='example-collapse-text'
              aria-expanded={isShowMore}
            >
              Show more
            </Button>
          </>
        ) : (
          ''
        )}
      </Row>
    </Container>
  )
}

export default FilterBox
