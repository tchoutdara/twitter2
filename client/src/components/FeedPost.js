import React from 'react';
import {  
  Button,
  Input,
  Text,
  Segment,
} from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
class FeedPost extends React.Component {

  state = {
    input: '',
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      input: value
    })
  }

  handleSubmit = (e) => {
    const post = {text: this.state.input, likes: 0, dislikes: 0, user_id: this.props.user.user.id}
    e.preventDefault()
    axios.post('/api/posts/', post)
      .then(res => this.setState({
        input: '',
      },() => {
        this.props.newPost(post)
      }))
  }

  render() {
    return (
      <Segment>
        <Input fluid="true" action placeholder="Write something no one will care about..." onChange={this.handleChange} >
          <input />
          <Button onClick={this.handleSubmit}>Post</Button>
        </Input>     
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state }
}

export default connect(mapStateToProps)(FeedPost);