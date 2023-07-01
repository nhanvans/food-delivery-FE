import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'

type Props = {
  name: string
  scroll?: boolean
  backdrop?: string | 'static'
  classNameBtn?: string
}

const Filter = ({ name, classNameBtn, ...props }: Props) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const toggleShow = () => setShow((s) => !s)
  return (
    <>
      <Button variant='outline-primary' onClick={toggleShow} className={'me-2' + classNameBtn}>
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
          etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Filter
