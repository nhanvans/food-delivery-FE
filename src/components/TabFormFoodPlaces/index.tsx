import React from 'react'
import { Button, Row, Tab, Tabs } from 'react-bootstrap'
import FormFoodPlace from '../FormFoodPlace'
import FormFoodDetail from '../FormFoodDetail'
import FormFoodLocation from '../FormLocation'

type Props = {
  handleShowForm: () => void
}

const TabFormFoodPlaces = ({ handleShowForm, ...probs }: Props) => {
  return (
    <>
      <Tabs defaultActiveKey='foodBase' id='justify-tab-example' className='mb-3' justify>
        <Tab eventKey='foodBase' title='Thông tin cơ bản'>
          <FormFoodPlace />
        </Tab>
        <Tab eventKey='detail' title='Thông tin chi tiết'>
          <FormFoodDetail />
        </Tab>
        <Tab eventKey='location' title='Vị trí địa lý'>
          <FormFoodLocation />
        </Tab>
        <Tab eventKey='contact' title='Contact' disabled>
          Tab content for Contact
        </Tab>
      </Tabs>
      <Row>
        <Button variant='primary' type='submit' onClick={handleShowForm}>
          Hoàn thành
        </Button>
      </Row>
    </>
  )
}

export default TabFormFoodPlaces
