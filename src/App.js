import React, { Component } from 'react'
import { Container } from 'reactstrap'
import axios from 'axios'
import _ from 'lodash'
import 'bootstrap/dist/css/bootstrap.css'
import { PageList } from './PageList'
import { Item } from './Item'

const style = {
  paddingTop: '20px', paddingBottom: '20px'
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: {
        success: false,
        data: []
      },
      authors: {
        success: false,
        data: []
      },
    }
  }

  componentDidMount () {
    axios.get('https://maqe.github.io/json/posts.json')
      .then(response => {
        this.setState({
          posts: {
            success: true,
            data: response.data
          }
        })
      })

    axios.get('https://maqe.github.io/json/authors.json')
      .then(response => {
        this.setState({
          authors: {
            success: true,
            data: response.data
          }
        })
      })
  }

  render () {
    const {posts, authors} = this.state
    let newPosts = []
    if (posts.success && authors.success) {
      newPosts = _.map(posts.data, item => _.assign(item, {author: _.find(authors.data, ['id', item.author_id])}))
    }

    return (
      <Container style={style}>
        <h4>MAQE Forums</h4>
        <h5>Subtitle</h5>
        <h6>Post</h6>
        {
          newPosts.map((value, key) => {
            const isEven = key % 2 === 0
            return (
              <Item value={value} key={key} isEven={isEven}/>
            )
          })
        }
        <PageList/>
      </Container>
    )
  }
}

export default App
