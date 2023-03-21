import React from 'react'
import styled from 'styled-components'

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
`

const Title = styled.h1`
  font-size: 36px;
  font-weight: 600px;
  line-height: 48px;
  margin-right: 10px;
`

const Divider = styled.div`
  flex-grow: 1;
  height: 1px;
  background: #15e1d5;
`

const Heading = ({ title }) => {
  return (
    <HeadingWrapper>
      <Title>{ title || 'Title.'}</Title>
      <Divider></Divider>
    </HeadingWrapper>
  )
}

export default Heading