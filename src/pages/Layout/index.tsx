import React from 'react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const index = (props: Props) => {
  const { children } = props

  return (
    <>
      <header>header</header>
      <div>{children}</div>
      <footer>foodter</footer>
    </>
  )
}

export default index
