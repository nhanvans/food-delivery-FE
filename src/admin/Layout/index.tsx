import React, { ReactNode, useState } from 'react'
import {
  CommentOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoneyCollectOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Layout, Menu, Button, theme } from 'antd'
import logo from '~/assets/icon/react.svg'

import './layout.scss'

const { Header, Sider, Content } = Layout

type Props = {
  children: ReactNode
}

const LayoutAdmin = ({ children, ...probs }: Props) => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='admin-logo-food'>
          {' '}
          <img src={logo} alt='logo' />
        </div>
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Nhà hàng'
            },
            {
              key: '2',
              icon: <CommentOutlined />,
              label: 'Bình luận'
            },
            {
              key: '3',
              icon: <MoneyCollectOutlined />,
              label: 'Ví'
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            position: 'sticky',
            top: '0',
            zIndex: '10000',
            boxShadow: '0px 2px #e5e5e5'
          }}
        >
          <Button
            type='text'
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutAdmin
