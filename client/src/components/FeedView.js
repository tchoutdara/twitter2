import React from 'react';
import {
  Container,
  Grid,
  Card,
  Sticky,
  Icon,
  Segment,
  Feed,
  Divider,
} from 'semantic-ui-react';
import axios from 'axios';
import FeedPost from './FeedPost';

class FeedView extends React.Component {

  state = {
    posts: [],
    users: [],
  }

  componentDidMount() {
    axios.get('/api/posts')
      .then( ({ data: posts }) => this.setState({ posts }) )
    axios.get('/api/user')
      .then( res => this.setState({ users: res.data }) )
  }

  newPost = (post) => {
    this.setState({
      posts: [post, ...this.state.posts]
    })
  }
  
  addLike = (post, likes) => {
    const like = likes + 1;
    axios.put(`/api/posts/${post}`, {
      likes: like
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })    
  }

  addDislike = (post, dislikes) => {
    const dislike = dislikes + 1;
    axios.put(`/api/posts/${post}`, {
      dislikes: dislike
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })    
  }

  formatDate = (post) => {
    const date = new Date(post.created_at)
    return (<em>{date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}</em>)
  }


  displayPosts = () => {
    let postingUser = {}
    return this.state.posts.map(post => {
      postingUser = this.state.users.find(user => user.id === post.user_id)
        return(
        <Segment>
             <Feed.Event>
              <Feed.Label image='/images/avatar/small/joe.jpg' />
              <Feed.Content>
                <Feed.Summary>
                  <a>{`${postingUser ? postingUser.nickname : null}`}</a> posted on his page
                  <Feed.Date>{this.formatDate(post)}</Feed.Date>
                </Feed.Summary>
                <Feed.Extra text>
                  {post.text}
                </Feed.Extra>
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name='thumbs up' onClick={() => this.addLike(post.id, post.likes)} />                     
                    {post.likes}
                  </Feed.Like>
                  <Feed.Like>
                    <Icon name='thumbs down' onClick={() => this.addDislike(post.id, post.dislikes)}/>
                    {post.dislikes}
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
        </Segment>
        )
      })
  }

  render() {
    return (
      <Container>
        <Divider/>
        <Grid columns='equal'>
          <Grid.Column>
          <Sticky>
            <Card>
              <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                  <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  22 Friends
                </a>
              </Card.Content>
            </Card>
          </Sticky>
          </Grid.Column>
          <Grid.Column width={8}>
            <Grid.Row>
              <FeedPost newPost={this.newPost}/>
            </Grid.Row>
            <Feed>
              {this.displayPosts()}
            </Feed>
          </Grid.Column>
          <Grid.Column>
            <Segment>3</Segment>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default FeedView;