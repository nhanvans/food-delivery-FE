import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

import './GroupRestaurantRow.scss'
import { DeleteOutlined, DollarOutlined, EditOutlined, StarFilled, StarOutlined } from '@ant-design/icons'

type Props = {
  handleShowForm: () => void
}

const GroupRestaurantRow = ({ handleShowForm, ...props }: Props) => {
  return (
    <Row className='restaurant-group'>
      <Col className='col-auto ps-0'>
        <div className='img-restaurant'>
          <img
            src='https://images.foody.vn/res/g115/1148339/prof/s640x400/foody-upload-api-foody-mobile-an-3043e5a0-220819161235.jpeg'
            alt=''
          />
        </div>
      </Col>
      <Col>
        <div className='info-restaurant'>
          <p className='name'>Trà Sữa Xingfu Cha - Lý Nam Đế</p>
          <p className='address'>10 Lý Nam Đế, P. Sơn Phong, Tp. Hội An, Quảng Nam</p>
          <div className='rating'>
            <div className='stars'>
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarOutlined />
            </div>
            <span className='number-rating'>999+</span>
          </div>
          <p className='cost-restaurant m-0'>
            <DollarOutlined />
            10,000 - 100,000
          </p>
        </div>
      </Col>
      <Col className='col-auto'>
        <div className='group-btn'>
          <Button variant='outline-primary' onClick={handleShowForm}>
            <EditOutlined />
          </Button>
          <Button variant='outline-danger'>
            <DeleteOutlined />
          </Button>
        </div>
      </Col>
    </Row>
  )
}

export default GroupRestaurantRow
