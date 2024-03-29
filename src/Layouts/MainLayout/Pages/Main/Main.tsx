import React from 'react'
import { Container } from 'react-bootstrap'
import Block1 from './Block1/Block1'
import './Main.scss'

interface MainProps {}

interface MainState {}

class Main extends React.Component<MainProps, MainState> {
  render() {
    return (
      <Container
        fluid
        className="Main p-0"
        style={{
          background: `url(img/bg.jpg)`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Block1 />
      </Container>
    )
  }
}

export default Main
