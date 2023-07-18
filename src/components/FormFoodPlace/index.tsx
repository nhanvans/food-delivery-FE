import React from 'react'
import { Button, Col, Form, ListGroup, Row } from 'react-bootstrap'

type Props = {
  name?: string
}

const FormFoodPlace = ({ ...probs }: Props) => {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='foodPlaceForm.ControlInputName'>
        <Form.Label>Tên địa điểm</Form.Label>
        <Form.Control type='text' placeholder='Vui lòng nhập tên địa điểm' />
      </Form.Group>

      <ListGroup className='mb-3'>
        <Form.Label>amenities</Form.Label>
        <ListGroup.Item>
          <Row>
            {[
              { amenities: 'wifi_free', name: 'Có wifi' },
              { amenities: 'air_conditioner', name: 'Có máy lạnh & điều hòa' },
              { amenities: 'car_park', name: 'Có chỗ đậu ôtô' },
              { amenities: 'free_bike_park', name: 'Giữ xe máy miễn phí' },
              { amenities: 'takeaway_services', name: 'Cho mua về' },
              { amenities: 'outdoor_seats', name: 'Có bàn ngoài trời' },
              { amenities: 'delivery_services', name: 'Có giao hàng' },
              { amenities: 'reservation_required', name: 'Nên đặt trước' },
              { amenities: 'live_sport_tv', name: 'Có chiếu bóng đá' },
              { amenities: 'smoking_zone', name: 'Có khu vực hút thuốc' },
              { amenities: 'conference_support', name: 'Có hỗ trợ hội thảo' },
              { amenities: 'live_music', name: 'Có nhạc sống' },
              { amenities: 'tax_invoice_available', name: 'Có xuất hóa đơn đỏ' },
              { amenities: 'credit_cards_available', name: 'Trả bằng thẻ' },
              { amenities: 'private_room', name: 'Có phòng riêng' },
              { amenities: 'playground_for_kids', name: 'Có chỗ chơi cho trẻ em' },
              { amenities: 'karaoke_service', name: 'Có karaoke' },
              { amenities: 'tips_for_staff', name: 'Tip cho nhân viên' },
              { amenities: 'member_cards', name: 'Có thẻ thành viên' },
              { amenities: 'disabled_person_support', name: 'Có hỗ trợ người khuyết tật' },
              { amenities: 'heat_conditioner', name: 'Có lò sưởi' },
              { amenities: 'swimming_pool', name: 'Có hồ bơi' }
            ].map((item) => (
              <Col key={item.amenities} md='3'>
                <Form.Check // prettier-ignore
                  type='checkbox'
                  id={`${item.amenities}`}
                  label={`${item.name}`}
                />
              </Col>
            ))}
          </Row>
        </ListGroup.Item>
      </ListGroup>

      <Row className='mb-3'>
        <Form.Group as={Col} controlId='foodPlaceForm.ControlInputPhone'>
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control type='text' placeholder='Vui lòng nhập số điện thoại' />
        </Form.Group>
        <Form.Group as={Col} controlId='foodPlaceForm.ControlInputWebsite'>
          <Form.Label>Website</Form.Label>
          <Form.Control type='text' placeholder='Vui lòng nhập website' />
        </Form.Group>
        <Form.Group as={Col} controlId='foodPlaceForm.ControlInputEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='Vui lòng nhập email' />
        </Form.Group>

        <Form.Group as={Col} controlId='foodPlaceForm.ControlInputAllowView'>
          <Form.Label> </Form.Label>
          <Form.Check // prettier-ignore
            type='switch'
            id='custom-switch'
            label='Hiển thị'
            className='mt-2'
          />
        </Form.Group>
      </Row>

      <Row className='mb-3'>
        <Form.Group as={Col} controlId='foodPlaceForm.ControlInputMinprice'>
          <Form.Label>Giá thấp nhất</Form.Label>
          <Form.Control type='number' placeholder='Vui lòng nhập giá thấp nhất' />
        </Form.Group>
        <Form.Group as={Col} controlId='foodPlaceForm.ControlInputMaxprice'>
          <Form.Label>Giá cao nhất</Form.Label>
          <Form.Control type='number' placeholder='Vui lòng nhập giá cao nhất' />
        </Form.Group>
      </Row>

      <Row className='mb-3'>
        <Form.Group as={Col} controlId='foodPlaceForm.ControlInputFb'>
          <Form.Label>Facebook</Form.Label>
          <Form.Control type='text' placeholder='Vui lòng nhập link facebook' />
        </Form.Group>
        <Form.Group as={Col} controlId='foodPlaceForm.ControlInputInstagram'>
          <Form.Label>Instagram</Form.Label>
          <Form.Control type='text' placeholder='Vui lòng nhập link Instagram' />
        </Form.Group>
      </Row>

      <Row className='mb-3'>
        <Form.Group as={Col} controlId='foodPlaceForm.ControlInputYoutube'>
          <Form.Label>Youtube</Form.Label>
          <Form.Control type='text' placeholder='Vui lòng nhập link youtube' />
        </Form.Group>
        <Form.Group as={Col} controlId='foodPlaceForm.ControlInputZalo'>
          <Form.Label>Zalo</Form.Label>
          <Form.Control type='text' placeholder='Vui lòng nhập link zalo' />
        </Form.Group>
      </Row>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  )
}

export default FormFoodPlace
