import React from 'react'
import { Link } from 'react-router-dom'
import logo from '~/assets/icon/react.svg'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import { SearchOutlined } from '@ant-design/icons'
import FlagVn from '~/assets/FlagVn'
import FlagEn from '~/assets/FlagEn'
import './header.scss'

const index = () => {
  return (
    <Navbar expand='lg' fixed='top' className='bg-body-tertiary nav-header'>
      <Container>
        <Navbar.Brand href='#home'>
          <img src={logo} alt='logo' width='30' height='30' className='d-inline-block align-top' />
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='' style={{ width: '100%' }}>
            {/*me-auto*/}
            <NavDropdown title='TP.HCM' id='basic-nav-dropdown' className='cityDropdown ms-3 me-3'>
              <NavDropdown.Item href=''>TP.HCM</NavDropdown.Item>
              <NavDropdown.Item href=''>Hà Nội</NavDropdown.Item>
              <NavDropdown.Item href=''>Đà Nẵng</NavDropdown.Item>
              <NavDropdown.Item href=''>Hải Phòng</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/'>Nhà hàng</Nav.Link>
            <Nav.Link href='/'>Đồ ăn nhanh</Nav.Link>
            <Nav.Link href='/'>Món tráng miệng</Nav.Link>
            <Nav.Link href='/'>Cà phê & Trà</Nav.Link>
            <NavDropdown title='Xem thêm' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/'>Tiệm bánh</NavDropdown.Item>
              <NavDropdown.Item href='/'>Quán bar & Quán rượu</NavDropdown.Item>
              <NavDropdown.Item href='/'>Chợ đặc sản</NavDropdown.Item>
              <NavDropdown.Item href='/'>Chỉ giao hàng</NavDropdown.Item>
            </NavDropdown>

            <Button variant='default' className='btn-search'>
              <SearchOutlined style={{ fontSize: '23px', color: '#000', fontWeight: '700' }} />
            </Button>
            <Button variant='outline-danger' className='ms-2 btn-login'>
              Đăng nhập
            </Button>
            <NavDropdown title={<FlagVn width={30} height={30} />} id='basic-nav-dropdown' className='ms-2 me-0'>
              <NavDropdown.Item href='' active={true}>
                <FlagVn width={30} height={30} />
              </NavDropdown.Item>
              <NavDropdown.Item href=''>
                <FlagEn width={30} height={30} />
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default index
