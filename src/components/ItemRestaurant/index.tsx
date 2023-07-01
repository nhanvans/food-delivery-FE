import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

import './ItemRestaurant.scss'
import TooltipCus from '~/components/TooltipCus'
import { Overlay, Tooltip } from 'react-bootstrap'

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
  const [showTitle, setShowTitle] = useState(false)
  const [show, setShow] = useState(false)
  const target = useRef(null)
  const targetTitle = useRef(null)

  return (
    <Card className='item-restaurant'>
      <Card.Img variant='top' src={Item.imageUrl + '/100px180'} />
      <Card.Body>
        {/* <OverlayTrigger
          placement='bottom'
          delay={{ show: 250, hide: 400 }}
          overlay={<TooltipCus name={Item.name} />}
        >
    </OverlayTrigger> */}
        <Overlay target={targetTitle.current} show={showTitle} placement='right'>
          <Tooltip id='overlay-example'>{Item.name}</Tooltip>
        </Overlay>
        <Card.Title
          ref={targetTitle}
          onMouseEnter={() => setShowTitle(!showTitle)}
          onMouseLeave={() => setShowTitle(!showTitle)}
          className='name'
        >
          {Item.name}
        </Card.Title>

        <Overlay target={target.current} show={show} placement='right'>
          <Tooltip id='overlay-example'>{Item.address}</Tooltip>
        </Overlay>
        <Card.Text
          ref={target}
          onMouseEnter={() => setShow(!show)}
          onMouseLeave={() => setShow(!show)}
          className='address'
        >
          {Item.address}
        </Card.Text>
        {/* <Button variant='primary'>Go somewhere</Button> */}
      </Card.Body>
    </Card>
  )
}

export default ItemRestaurant
