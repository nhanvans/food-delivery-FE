import React from 'react'
import { Button, Row, Tab, Tabs } from 'react-bootstrap'
import FormFoodPlace from '../FormFoodPlace'

type Props = {
  handleShowForm: () => void
}

const TabFormFoodPlaces = ({ handleShowForm, ...probs }: Props) => {
  return (
    <>
      <Tabs defaultActiveKey='profile' id='justify-tab-example' className='mb-3' justify>
        <Tab eventKey='home' title='Home'>
          <FormFoodPlace />
        </Tab>
        <Tab eventKey='profile' title='Profile'>
          <FormFoodPlace />
        </Tab>
        <Tab eventKey='longer-tab' title='Loooonger Tab'>
          <FormFoodPlace />
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
