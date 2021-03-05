/* eslint-disable no-use-before-define */
import { NextPage } from 'next'
import React from 'react'
import { Container } from '../../styles/pages/exemple'

const exemple: NextPage = () => {
  return (
    <div>
      <head>
        <title> Next JS Starter - Typescript</title>
      </head>
      <Container> This is the exemple page</Container>
    </div>
  )
}

export default exemple
