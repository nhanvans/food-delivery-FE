import React from 'react'
import { Col, Container, Figure, Form, Image, InputGroup, Nav, Row } from 'react-bootstrap'
import Layout from '~/pages/Layout'

import './RestaurantDetail.scss'
import { DollarOutlined, FieldTimeOutlined, SearchOutlined, StarFilled, StarOutlined } from '@ant-design/icons'

type RestaurantType = {
  name: string
  address: string
  imageUrl: string
}

type Props = {
  key?: string | number
}

const RestaurantDetail = ({ key, ...props }: Props) => {
  const Restaurant: RestaurantType = {
    name: 'Trà Sữa Xingfu Cha - Lý Nam Đế',
    address: '10 Lý Nam Đế, P. Sơn Phong, Tp. Hội An, Quảng Nam',
    imageUrl:
      'https://images.foody.vn/res/g115/1148339/prof/s640x400/foody-upload-api-foody-mobile-an-3043e5a0-220819161235.jpeg'
  }

  return (
    <Layout>
      <div className='detail-restaurant'>
        <Container>
          <Row>
            <Col xl='6'>
              <div className='restaurant-img'>
                <Image width={'100%'} height={'100%'} alt='171x180' src={`${Restaurant.imageUrl}/171x180`} />
              </div>
            </Col>
            <Col xl='6'>
              <div className='restaurant-info'>
                <h1 className='name'>{Restaurant.name}</h1>
                <div className='address'>{Restaurant.address}</div>
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
                <div className='status-restaurant'>
                  <div className='opentime-status'>
                    <span className='stt online' title='Mở cửa'></span>
                  </div>
                  <div className='time'>
                    <FieldTimeOutlined />
                    07:00 - 22:15
                  </div>
                </div>
                <div className='cost-restaurant'>
                  <DollarOutlined />
                  10,000 - 100,000
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='menu-restaurant'>
        <Container>
          <h3 className='menu-restaurant-title'>Thực đơn</h3>
          <Row>
            <Col xl='3'>
              <div className='menu-restaurant-category'>
                <Nav className='flex-column'>
                  {[
                    {
                      id: 1,
                      name: 'MÓN ĐANG GIẢM',
                      isActive: true
                    },
                    {
                      id: 2,
                      name: 'TRÀ VẢI GIẢI NHIỆT',
                      isActive: false
                    },
                    {
                      id: 3,
                      name: 'DEAL',
                      isActive: false
                    },
                    {
                      id: 4,
                      name: 'TRÀ THANH NHIỆT',
                      isActive: false
                    },
                    {
                      id: 5,
                      name: 'TRÀ THANH NHIỆT',
                      isActive: false
                    },
                    {
                      id: 6,
                      name: 'TRÀ THANH NHIỆT',
                      isActive: false
                    },
                    {
                      id: 7,
                      name: 'TRÀ THANH NHIỆT',
                      isActive: false
                    },
                    {
                      id: 8,
                      name: 'TRÀ THANH NHIỆT',
                      isActive: false
                    },
                    {
                      id: 9,
                      name: 'TRÀ THANH NHIỆT',
                      isActive: false
                    }
                  ].map((item) => (
                    <Nav.Item key={item.id}>
                      <span className={`${item.isActive ? 'active' : ''}`}>{item.name}</span>
                    </Nav.Item>
                  ))}
                </Nav>
              </div>
            </Col>
            <Col xl='6'>
              <div className='menu-restaurant-detail'>
                <div className='menu-restaurant-detail-list'>
                  <div className='search-items'>
                    <InputGroup className='mb-3'>
                      <InputGroup.Text id='basic-addon1'>
                        <SearchOutlined />
                      </InputGroup.Text>
                      <Form.Control placeholder='Tìm món' aria-label='menu' aria-describedby='basic-addon1' />
                    </InputGroup>
                  </div>

                  <div className='restaurant-item'>
                    <div className='menu-group'>
                      <div className='title-menu'>Món Đang Giảm</div>
                    </div>

                    <div className='item-restaurant-row'>
                      <Row>
                        <Col className='col-auto item-restaurant-img'>
                          <div className='inline'>
                            <img
                              src='https://images.foody.vn/res/g105/1049287/s120x120/74e6de71-9aef-4036-814f-d0b89e34-1444c713-221231195654.jpeg'
                              alt=''
                              width={60}
                              height={60}
                            />
                          </div>
                        </Col>
                        <Col className='item-restaurant-info'>
                          <h2 className='item-restaurant-name'>COMBO SIEUHOT 7.7</h2>
                          <div className='item-restaurant-desc'>2 Trà Vải Dầm Size L +Trà sữa trân châu đường đen</div>
                        </Col>
                        <Col className='col-auto item-restaurant-more'>
                          <Row>
                            <Col className='col-auto product-price'>
                              <div className="old-price"></div>
                            </Col>
                            <Col className='col-auto adding-food-cart'>
                              <div className='btn-adding'>+</div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default RestaurantDetail
