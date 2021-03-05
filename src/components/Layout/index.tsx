/* eslint-disable no-use-before-define */
import React from 'react'
import { Container } from './styles'
export interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = props => {
  return <Container>{props.children}</Container>
}

export default Layout
