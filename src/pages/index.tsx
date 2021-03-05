/* eslint-disable no-use-before-define */
import { NextPage } from 'next'
import React from 'react'
import { Container } from '../styles/pages/home'

const home: NextPage = () => {
  return (
    <div>
      <head>
        <title> Next JS Starter - Typescript</title>
      </head>
      <Container>
        <h1>Next js Starter Project With Typescript </h1>
        <i>
          By: Hélio Fragão Fila ( GITHUB:{' '}
          <a href="https://www.github.com/h3lio2f">H3lio2f</a> ){' '}
        </i>
      </Container>
    </div>
  )
}

export default home
