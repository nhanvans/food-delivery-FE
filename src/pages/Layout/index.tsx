import React from 'react'
import { ReactNode } from 'react'
import Header from './Header'

type Props = {
  children: ReactNode
}

const index = (props: Props) => {
  const { children } = props

  return (
    <>
      <Header />
      <div>{children}</div>
      <footer>foodter</footer>
    </>
  )
}

export default index
