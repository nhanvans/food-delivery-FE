import React from 'react'
import './footer.scss'
import { Col, Container, Nav, Row } from 'react-bootstrap'

const index = () => {
  return (
    <div className='footer'>
      <Container
        style={{
          paddingTop: '15px',
          borderTop: '1px solid rgba(0,0,0,.1)'
        }}
      >
        <Row>
          <Col>
            <p className='title-block'>Công ty</p>
            <Nav className='flex-column'>
              <Nav.Link href='' className='pt-0 pb-0 ps-0'>
                Giới thiệu
              </Nav.Link>
              <Nav.Link href='' className='pt-0 pb-0 ps-0'>
                Trung tâm Trợ giúp
              </Nav.Link>
              <Nav.Link href='' className='pt-0 pb-0 ps-0'>
                Quy chế
              </Nav.Link>
              <Nav.Link href='' className='pt-0 pb-0 ps-0'>
                Điều khoản sử dụng
              </Nav.Link>
              <Nav.Link href='' className='pt-0 pb-0 ps-0'>
                Bảo mật thông tin
              </Nav.Link>
              <Nav.Link href='' className='pt-0 pb-0 ps-0'>
                Giải quyết khiếu nại
              </Nav.Link>
              <Nav.Link href='' className='pt-0 pb-0 ps-0'>
                Liên hệ
              </Nav.Link>
              <Nav.Link href='' className='pt-0 pb-0 ps-0'>
                Hợp tác nhân viên giao nhận
              </Nav.Link>
              <Nav.Link href='' className='pt-0 pb-0 ps-0'>
                Đăng ký quán
              </Nav.Link>
              <Nav.Link href='' className='pt-0 pb-0 ps-0'>
                ShopeeFood Uni
              </Nav.Link>
              <Nav.Link href='' className='pt-0 pb-0 ps-0'>
                Shopee Blog
              </Nav.Link>
            </Nav>
          </Col>
          <Col>
            <p className='title-block'>Danh mục</p>
            <Nav className='flex-column'>
              {[
                'Đồ ăn',
                'Đồ uống',
                'Đồ chay',
                'Bánh kem',
                'Tráng miệng',
                'Homemade',
                'Vỉa hè',
                'Pizza/Burger',
                'Món gà',
                'Món lẩu',
                'Sushi'
              ].map((item) => (
                <Nav.Link key={item} href='' className='pt-0 pb-0 ps-0'>
                  {item}
                </Nav.Link>
              ))}
            </Nav>
          </Col>
          <Col>
            <p className='title-block'>Hỗ trợ</p>

            <Nav className='flex-column'>
              {['Liên hệ', 'Điều khoản dịch vụ', 'Chính sách bảo mật'].map((item) => (
                <Nav.Link key={item} href='' className='pt-0 pb-0 ps-0'>
                  {item}
                </Nav.Link>
              ))}
            </Nav>
          </Col>
          <Col xs={5}>
            <p className='title-block'>Thông tin liên hệ</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default index
