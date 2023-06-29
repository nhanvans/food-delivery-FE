import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import './banner.scss'

type Props = {
  style: React.CSSProperties
}

const index = (props: Props) => {
  const { style } = props
  return (
    <div style={style} className='banner-food'>
      <Container>
        <div className='food-search'>
          <div>
            <h1 className='title'>Đặt Đồ ăn, giao hàng từ 20'...</h1>
            <div className='local'>có 12278 địa điểm ở Đà Nẵng từ 00:00 - 23:59</div>
          </div>

          <div className='category-list-filter'>
            {[
              'All',
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
              'Sushi',
              'Mì phở',
              'Cơm hộp'
            ].map((item) => (
              <Button key={item} variant='outline-secondary' className='me-2 mb-1 mt-1 btn-category'>
                <Nav.Link href='/'>{item}</Nav.Link>
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default index
