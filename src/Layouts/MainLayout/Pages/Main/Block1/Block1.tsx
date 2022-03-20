import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Block1.scss'

interface Block1Props {}

const Block1 = (props: Block1Props) => {
  return (
    <Container className="Block1 p-0">
      <Row className="Block1_row m-0">
        <div className="Block1_logo">
          <img src="./img/logo.png" alt="Мяско" />
        </div>
      </Row>
      <Row className="Block1_row bottomLine m-0">
        <Col className="Block1_col p-0" xs={12} md={6}>
          <h1>Попробуй вкус настоящего степного мяса</h1>
        </Col>
        <Col className="Block1_col transparent" xs={12} md={6}>
          <ol>
            <li
              style={{
                listStyleImage: "url('./img/point.svg')",
              }}
            >
              «Для убоя поставляется экологически чистый степной скот. Собственный убой и обвалка гарантируют высокое
              качество мяса.»
            </li>
            <li
              style={{
                listStyleImage: "url('./img/point.svg')",
              }}
            >
              Крупнейший российский экспортер мяса баранины в ИР Иран в 2019 году
            </li>
            <li
              style={{
                listStyleImage: "url('./img/point.svg')",
                paddingBottom: 0,
              }}
            >
              Компания представлена на рынке 8 лет, за последние 4 года отгружено около 5 тыс. тонн мяса.{' '}
            </li>
          </ol>
        </Col>
      </Row>
      <Row className="Block1_row lastBlock m-0">
        <Col className="Block1_col p-0" xs={12} md={6}>
          <div className="Block1_note" style={{ paddingBottom: 40 }}>
            Вы можете связаться с нами по телефону или через Whatsapp
          </div>
          <div className="Block1_imgNote d-flex align-items-center">
            <div className="Block1_img">
              <img src="./img/whatsapp.svg" alt="" />
            </div>
            <div className="Block1_note phone">+7 927 550 63 50</div>
          </div>
        </Col>
        <Col className="Block1_col p-0" xs={12} md={6}>
          <div className="Block1_imgNote d-flex align-items-center">
            <div className="Block1_img">
              <img src="./img/location.svg" alt="" />
            </div>
            <div className="Block1_note" style={{paddingLeft: 30}}>
              416411 Россия, Астраханская область, Лиманский район, р.п. Лиман, ул. Светлая, дом 2
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Block1
