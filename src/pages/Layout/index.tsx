import React from 'react'
import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children: ReactNode
}

const Layout = (props: Props) => {
  const { children } = props

  return (
    <>
      <Header />
      <div className='content'>{children}</div>
      <div style={{ clear: 'both' }}></div>
      <Footer />
    </>
  )
}

export default Layout
