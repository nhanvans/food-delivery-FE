import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { Tooltip } from 'react-bootstrap'

import './ItemRestaurant.scss'

type Item = {
  name: string
  address: string
  imageUrl: string
}

type Props = {
  key?: string | number
  Item: Item
}

const ItemRestaurant = ({ key, Item, ...props }: Props) => {
  const renderTooltip = (name: string) => <Tooltip id='button-tooltip'>{name}</Tooltip>

  return (
    <Card className='item-restaurant'>
      <Card.Img variant='top' src={Item.imageUrl + '/100px180'} />
      <Card.Body>
        <OverlayTrigger placement='bottom' delay={{ show: 250, hide: 400 }} overlay={renderTooltip((name = Item.name))}>
          <Card.Title className='name'>{Item.name}</Card.Title>
        </OverlayTrigger>
        <OverlayTrigger
          placement='bottom'
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip((name = Item.address))}
        >
          <Card.Text className='address'>{Item.address}</Card.Text>
        </OverlayTrigger>
        {/* <Button variant='primary'>Go somewhere</Button> */}
      </Card.Body>
    </Card>
  )
}

export default ItemRestaurant
