import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import LayoutAdmin from '~/admin/Layout'
import GroupRestaurantRow from '~/components/GroupRestaurantRow'
import PaginationCus from '~/components/PaginationCus'

const FoodPlace = () => {
  const [isShowForm, setIsShowForm] = useState(false)

  const handleShowForm = () => {
    setIsShowForm(!isShowForm)
  }
  console.log(isShowForm);
  

  return (
    <LayoutAdmin>
      <div>
        <GroupRestaurantRow handleShowForm={handleShowForm} />
        <GroupRestaurantRow handleShowForm={handleShowForm} />
        <GroupRestaurantRow handleShowForm={handleShowForm} />
        <GroupRestaurantRow handleShowForm={handleShowForm} />
      </div>
      <Row className='pt-3'>
        <PaginationCus classNamePagi='justify-content-center' />
      </Row>
    </LayoutAdmin>
  )
}

export default FoodPlace
