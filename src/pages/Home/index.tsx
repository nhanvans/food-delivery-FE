import React from 'react'
import Layout from '~/pages/Layout'
import Banner from '~/components/Banner'

const index = () => {
  return (
    <Layout>
      <Banner
        style={{
          position: 'fixed',
          top: '70px'
        }}
      />
    </Layout>
  )
}

export default index
