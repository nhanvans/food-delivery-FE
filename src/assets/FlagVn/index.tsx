import React from 'react'
import flagVn from '~/assets/icon/vietnam-flag-icon.svg'

type Props = {
  width?: number
  height?: number
}

const index = (props: Props) => {
  const { width, height } = props
  return (
    <>
      <img src={flagVn} width={width} height={height} alt='vn' />
    </>
  )
}

export default index
