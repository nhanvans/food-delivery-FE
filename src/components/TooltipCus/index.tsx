import React from 'react'
import Tooltip from 'react-bootstrap/Tooltip'

type Props = {
  key?: string | number
  name: string
  target?: React.HTMLAttributeAnchorTarget
}

const TooltipCus = ({ key, name, target, ...props }: Props) => {
  return (
    <Tooltip id={`button-tooltip${name}`} {...props}>
      {name}
    </Tooltip>
  )
}

export default TooltipCus
