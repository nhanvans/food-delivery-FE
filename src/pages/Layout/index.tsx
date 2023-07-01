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
      <div
        className='content'
        style={{
          position: 'relative',
          width: '100%',
          clear: 'both',
          marginTop: '60px' 
          // top: '70px'
        }}
      >
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
