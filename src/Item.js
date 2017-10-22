import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import moment from 'moment'

export const Item = ({value, isEven}) => {

  const styles = {
    card: {padding: '20px', marginTop: '20px', backgroundColor: `${isEven ? 'rgb(248, 248, 249)' : 'white'}`},
    image: {width: '50%'},
    detail: {fontSize: '14px'},
    marginTop: {marginTop: '20px'},
    border: {borderRight: '1px solid #dcd9d9'}
  }

  return (
    <Card style={styles.card}>
      <Row>
        <Col><img className="img-fluid" src={value.image_url}/></Col>
        <Col sm="6" style={styles.border}>
          <h5>{value.title}</h5>
          <p style={styles.detail}>{value.body}</p>
          <p className="text-muted">
            <i className="fa fa-clock-o" aria-hidden="true"/> {moment(value.created_at).fromNow()}</p>
        </Col>
        <Col className="text-center">
          <img className="img-fluid rounded-circle" style={styles.image} src={value.author.avatar_url}/>
          <p className="text-danger" style={styles.marginTop}><b>{value.author.name}</b></p>
          <p>{value.author.role}</p>
          <p><i className="fa fa-map-marker" aria-hidden="true"/> {value.author.place}</p>
        </Col>
      </Row>
    </Card>
  )
}