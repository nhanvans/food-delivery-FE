import React, { useState } from "react";
import Layout from '~/pages/Layout'
import Banner from '~/components/Banner'

const Home = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    ChangeIsScrolled(true)
  }

  const ChangeIsScrolled = (value: boolean) => {
    setIsScrolled(value)
  }
  return (
    <Layout>
      <Banner
        style={{
          // position: 'absolute',
          // top: '70px'
        }}
      />

      <div>asdasd</div>
    </Layout>
  )
}

export default Home
