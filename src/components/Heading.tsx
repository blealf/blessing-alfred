import React from 'react'
import styled from 'styled-components'

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  max-width: 100%;
  margin-bottom: 20px;
`

const Title = styled.h1`
  font-size: 36px;
  font-weight: 600px;
  line-height: 48px;
  margin: 20px 10px;
`

const Divider = styled.div`
  flex-grow: 1;
  height: 1px;
  background: #15E1D5;
`

const Heading = ({ title, both }: { title?: string, both?: boolean}) => {
  return (
    <HeadingWrapper>
      <Divider></Divider>
      <Title>{ title || 'Title.'}</Title>
      <Divider></Divider>
    </HeadingWrapper>
  )
}

export default Heading