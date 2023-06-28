import React from 'react'
import flagEn from '~/assets/icon/united-states-flag-icon.svg'

type Props = {
  width?: number
  height?: number
}

const index = (props: Props) => {
  const { width, height } = props
  return (
    <>
      <img src={flagEn} width={width} height={height} alt='vn' />
    </>
  )
}

export default index
