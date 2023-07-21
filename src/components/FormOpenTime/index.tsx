import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { TimePicker } from 'antd'
import './FormOpenTime.scss'

const FormOpenTime = () => {
  return (
    <Form>
      {[
        { type: 'mo', name: 'Thứ hai' },
        { type: 'tu', name: 'Thứ ba' },
        { type: 'we', name: 'Thứ tư' },
        { type: 'th', name: 'Thứ năm' },
        { type: 'fr', name: 'Thứ sáu' },
        { type: 'sa', name: 'Thứ bảy' },
        { type: 'su', name: 'chủ nhật' }
      ].map((item, index) => (
        <InputGroup className='mb-3' key={index}>
          <InputGroup.Checkbox aria-label='Checkbox for following text input' />
          <InputGroup.Text id='inputGroup-sizing-default' className='week'>{item.name}</InputGroup.Text>
          <InputGroup.Text id='inputGroup-sizing-default'>Ca 1</InputGroup.Text>
          <TimePicker.RangePicker />
          <InputGroup.Text id='inputGroup-sizing-default'>Ca 2</InputGroup.Text>
          <TimePicker.RangePicker />
          <InputGroup.Text id='inputGroup-sizing-default'>Ca 3</InputGroup.Text>
          <TimePicker.RangePicker />
        </InputGroup>
      ))}
    </Form>
  )
}

export default FormOpenTime
