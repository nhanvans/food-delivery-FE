import { useState } from 'react'
import { Collapse, Container, Form, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import FilterBox from '~/components/FilterBox'

import './Filter.scss'

type Props = {
  name: string
  scroll?: boolean
  backdrop?: string | 'static'
  classNameBtn?: string
}

const Filter = ({ name, classNameBtn, ...props }: Props) => {
  const [show, setShow] = useState(false)
  const [isShowMore, setShowMore] = useState(false)

  const handleClose = () => setShow(false)
  const toggleShow = () => setShow((s) => !s)
  return (
    <>
      <Button variant='outline-primary' onClick={toggleShow} className={`me-2 ${classNameBtn}`}>
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='filter'>
          <FilterBox
            title='Loại cơ sở'
            data={[
              { name: 'Nhà hàng' },
              { name: 'Đồ ăn nhanh' },
              { name: 'Món tráng miệng' },
              { name: 'Cà phê & Trà' }
            ]}
            showMore={[
              { name: 'Tiệm bánh' },
              { name: 'Quán bar & Quán rượu' },
              { name: 'Chợ đặc sản' },
              { name: 'Chỉ giao hàng' }
            ]}
          />
          <FilterBox
            title='Tính năng nhà hàng'
            data={[
              { name: 'Giao hàng' },
              { name: 'Cửa hàng bán thức ăn mang về' },
              { name: 'Dịch vụ bàn' },
              { name: 'Phục vụ đồ uống có cồn' }
            ]}
            showMore={[
              { name: 'Bãi biển' },
              { name: 'Bữa ăn tự chọn' },
              { name: 'Cho phép chó' },
              { name: 'Chấp nhận thẻ tín dụng' },
              { name: 'Có bãi đỗ xe' },
              { name: 'Lối vào ra cho xe lăn' },
              { name: 'Ngồi ngoài trời' },
              { name: 'Nhạc sống' },
              { name: 'Phong cách gia đình' },
              { name: 'Tivi' },
              { name: 'Ven bờ' },
              { name: 'Wifi miễn phí' },
              { name: 'Ăn tối phòng riêng' },
              { name: 'Đặt chỗ' }
            ]}
          />
          <FilterBox
            title='Bữa ăn'
            data={[{ name: 'Bữa sáng' }, { name: 'Bữa nửa buổi' }, { name: 'Bữa trưa' }, { name: 'Bữa tối' }]}
          />
          <FilterBox
            title='Giá'
            data={[{ name: 'Đồ ăn giá rẻ' }, { name: 'Hạng trung' }, { name: 'Ăn uống ở nhà hàng sang trọng' }]}
          />
          <FilterBox
            title='Hạn chế về chế độ ăn kiêng'
            data={[
              { name: 'Phù hợp với người ăn chay' },
              { name: 'Phù hợp với người ăn chay' },
              { name: 'Thịt kiểu Hồi giáo' },
              { name: 'Tùy chọn đồ ăn không có gluten' }
            ]}
          />
          <FilterBox
            title='Phù hợp với'
            data={[
              { name: 'Gia đình có trẻ em' },
              { name: 'Trẻ em' },
              { name: 'Món ăn địa phương' },
              { name: 'Nhóm lớn' }
            ]}
            showMore={[
              { name: 'Các dịp đặc biệt' },
              { name: 'Họp công việc' },
              { name: 'Lãng mạn' },
              { name: 'Quang cảnh quầy bar' },
              { name: 'Quang cảnh đẹp' },
              { name: 'Viên ngọc ẩn' }
            ]}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Filter
