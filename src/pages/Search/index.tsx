import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Filter from '~/components/Filter'
import ItemRestaurant from '~/components/ItemRestaurant'
import Layout from '~/pages/Layout'
import PaginationCus from '~/components/PaginationCus'

import './Search.scss'

const Search = () => {
  return (
    <Layout>
      <Container className='main-search'>
        <Row>
          <Col className='ps-0 mb-3'>
            <Filter name='Filter' backdrop='static' classNameBtn='btn-search-filter' />
          </Col>
        </Row>
        <Row>
          {[
            {
              name: 'Cơm Gà Nam Chợ Mới - Hoàng Diệu',
              address: '589 Hoàng Diệu, P. Hòa Thuận Đông, Quận Hải Châu, Đà Nẵng',
              imageUrl:
                'https://images.foody.vn/res/g28/277130/prof/s640x400/foody-upload-api-foody-mobile-5-201006112619.jpg'
            },
            {
              name: 'Cơm Gà Nam Chợ Mới - Hoàng Tuấn',
              address: '589 Hoàng Diệu, P. Hòa Thuận Đông, Quận Hải Châu, Đà Nẵng',
              imageUrl:
                'https://images.foody.vn/res/g28/277130/prof/s640x400/foody-upload-api-foody-mobile-5-201006112619.jpg'
            },
            {
              name: 'Cơm Gà Nam Chợ Mới - Hoàng Diệu',
              address: '589 Hoàng Diệu, P. Hòa Thuận Đông, Quận Hải Châu, Đà Nẵng',
              imageUrl:
                'https://images.foody.vn/res/g28/277130/prof/s640x400/foody-upload-api-foody-mobile-5-201006112619.jpg'
            },
            {
              name: 'Cơm Gà Nam Chợ Mới - Hoàng Diệu',
              address: '589 Hoàng Diệu, P. Hòa Thuận Đông, Quận Hải Châu, Đà Nẵng',
              imageUrl:
                'https://images.foody.vn/res/g28/277130/prof/s640x400/foody-upload-api-foody-mobile-5-201006112619.jpg'
            },
            {
              name: 'Cơm Gà Nam Chợ Mới - Hoàng Diệu',
              address: '589 Hoàng Diệu, P. Hòa Thuận Đông, Quận Hải Châu, Đà Nẵng',
              imageUrl:
                'https://images.foody.vn/res/g28/277130/prof/s640x400/foody-upload-api-foody-mobile-5-201006112619.jpg'
            },
            {
              name: 'Cơm Gà Nam Chợ Mới - Hoàng Diệu',
              address: '589 Hoàng Diệu, P. Hòa Thuận Đông, Quận Hải Châu, Đà Nẵng',
              imageUrl:
                'https://images.foody.vn/res/g28/277130/prof/s640x400/foody-upload-api-foody-mobile-5-201006112619.jpg'
            },
            {
              name: 'Cơm Gà Nam Chợ Mới - Hoàng Diệu',
              address: '589 Hoàng Diệu, P. Hòa Thuận Đông, Quận Hải Châu, Đà Nẵng',
              imageUrl:
                'https://images.foody.vn/res/g28/277130/prof/s640x400/foody-upload-api-foody-mobile-5-201006112619.jpg'
            },
            {
              name: 'Cơm Gà Nam Chợ Mới - Hoàng Diệu',
              address: '589 Hoàng Diệu, P. Hòa Thuận Đông, Quận Hải Châu, Đà Nẵng',
              imageUrl:
                'https://images.foody.vn/res/g28/277130/prof/s640x400/foody-upload-api-foody-mobile-5-201006112619.jpg'
            },
            {
              name: 'Cơm Gà Nam Chợ Mới - Hoàng Diệu',
              address: '589 Hoàng Diệu, P. Hòa Thuận Đông, Quận Hải Châu, Đà Nẵng',
              imageUrl:
                'https://images.foody.vn/res/g28/277130/prof/s640x400/foody-upload-api-foody-mobile-5-201006112619.jpg'
            },
            {
              name: 'Cơm Gà Nam Chợ Mới - Hoàng Diệu',
              address: '589 Hoàng Diệu, P. Hòa Thuận Đông, Quận Hải Châu, Đà Nẵng',
              imageUrl:
                'https://images.foody.vn/res/g28/277130/prof/s640x400/foody-upload-api-foody-mobile-5-201006112619.jpg'
            },
            {
              name: 'Cơm Gà Nam Chợ Mới - Hoàng Diệu',
              address: '589 Hoàng Diệu, P. Hòa Thuận Đông, Quận Hải Châu, Đà Nẵng',
              imageUrl:
                'https://images.foody.vn/res/g28/277130/prof/s640x400/foody-upload-api-foody-mobile-5-201006112619.jpg'
            },
            {
              name: 'Cơm Gà Nam Chợ Mới - Hoàng Diệu',
              address: '589 Hoàng Diệu, P. Hòa Thuận Đông, Quận Hải Châu, Đà Nẵng',
              imageUrl:
                'https://images.foody.vn/res/g28/277130/prof/s640x400/foody-upload-api-foody-mobile-5-201006112619.jpg'
            },
            {
              name: 'Cơm Gà Nam Chợ Mới - Hoàng Diệu',
              address: '589 Hoàng Diệu, P. Hòa Thuận Đông, Quận Hải Châu, Đà Nẵng',
              imageUrl:
                'https://images.foody.vn/res/g28/277130/prof/s640x400/foody-upload-api-foody-mobile-5-201006112619.jpg'
            },
            {
              name: 'Cơm Gà Nam Chợ Mới - Hoàng Diệu',
              address: '589 Hoàng Diệu, P. Hòa Thuận Đông, Quận Hải Châu, Đà Nẵng',
              imageUrl:
                'https://images.foody.vn/res/g28/277130/prof/s640x400/foody-upload-api-foody-mobile-5-201006112619.jpg'
            },
            {
              name: 'Cơm Gà Nam Chợ Mới - Hoàng Diệu',
              address: '589 Hoàng Diệu, P. Hòa Thuận Đông, Quận Hải Châu, Đà Nẵng',
              imageUrl:
                'https://images.foody.vn/res/g28/277130/prof/s640x400/foody-upload-api-foody-mobile-5-201006112619.jpg'
            },
            {
              name: 'Cơm Gà Nam Chợ Mới - Hoàng Diệu',
              address: '589 Hoàng Diệu, P. Hòa Thuận Đông, Quận Hải Châu, Đà Nẵng',
              imageUrl:
                'https://images.foody.vn/res/g28/277130/prof/s640x400/foody-upload-api-foody-mobile-5-201006112619.jpg'
            },
            {
              name: 'Cơm Gà Nam Chợ Mới - Hoàng Diệu',
              address: '589 Hoàng Diệu, P. Hòa Thuận Đông, Quận Hải Châu, Đà Nẵng',
              imageUrl:
                'https://images.foody.vn/res/g28/277130/prof/s640x400/foody-upload-api-foody-mobile-5-201006112619.jpg'
            },
            {
              name: 'Cơm Gà Nam Chợ Mới - Hoàng Diệu',
              address: '589 Hoàng Diệu, P. Hòa Thuận Đông, Quận Hải Châu, Đà Nẵng',
              imageUrl:
                'https://images.foody.vn/res/g28/277130/prof/s640x400/foody-upload-api-foody-mobile-5-201006112619.jpg'
            }
          ].map((item, index) => (
            <Col key={index} className='ps-0 mb-2' xxl='2' xl='3' lg='3' md='4' sm='6' xs='12'>
              <ItemRestaurant Item={item}></ItemRestaurant>
            </Col>
          ))}
        </Row>

        <Row className='pt-3'>
          <PaginationCus classNamePagi='justify-content-center' />
        </Row>
      </Container>
    </Layout>
  )
}

export default Search
