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
            <NavDropdown title='TP.HCM' id='basic-nav-dropdown' className='cityDropdown ms-5 me-5'>
              <NavDropdown.Item href=''>TP.HCM</NavDropdown.Item>
              <NavDropdown.Item href=''>Hà Nội</NavDropdown.Item>
              <NavDropdown.Item href=''>Đà Nẵng</NavDropdown.Item>
              <NavDropdown.Item href=''>Hải Phòng</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/'>Đồ ăn</Nav.Link>
            <Nav.Link href='/'>Thực phẩm</Nav.Link>
            <Nav.Link href='/'>Bia</Nav.Link>
            <Nav.Link href='/'>Hoa</Nav.Link>
            <Nav.Link href='/'>Siêu thị</Nav.Link>
            <Nav.Link href='/'>Thuốc</Nav.Link>
            <Nav.Link href='/'>Thú cưng</Nav.Link>

            <Button variant='default' className='btn-search'>
              <SearchOutlined style={{ fontSize: '23px', color: '#000', fontWeight: '700' }} />
            </Button>
            <Button variant='outline-danger' className='ms-3 btn-login'>
              Đăng nhập
            </Button>
            <NavDropdown title={<FlagVn width={30} height={30} />} id='basic-nav-dropdown' className='ms-3 me-0'>
              <NavDropdown.Item href=''>
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
