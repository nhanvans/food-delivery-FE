import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import LayoutAdmin from '~/admin/Layout'
import FormFoodPlace from '~/components/FormFoodPlace'
import GroupRestaurantRow from '~/components/GroupRestaurantRow'
import PaginationCus from '~/components/PaginationCus'
import TabFormFoodPlaces from '~/components/TabFormFoodPlaces'

const FoodPlace = () => {
  const [isShowForm, setIsShowForm] = useState(false)

  const handleShowForm = () => {
    setIsShowForm(!isShowForm)
  }
  console.log(isShowForm)

  const ListRestaurants = (handleShowForm: () => void) => {
    return (
      <>
        <div>
          <GroupRestaurantRow handleShowForm={handleShowForm} />
          <GroupRestaurantRow handleShowForm={handleShowForm} />
          <GroupRestaurantRow handleShowForm={handleShowForm} />
          <GroupRestaurantRow handleShowForm={handleShowForm} />
        </div>
        <Row className='pt-3'>
          <PaginationCus classNamePagi='justify-content-center' />
        </Row>
      </>
      
    )
  }

  return (
    <LayoutAdmin>
      { !isShowForm ? ListRestaurants(handleShowForm) : <TabFormFoodPlaces handleShowForm={handleShowForm} /> }
    </LayoutAdmin>
  )
}

export default FoodPlace
