import React from 'react';
import {
  Container,
  Grid,
  Button,
  Input,
  Text,
  Card,
  Sticky,
  Rail,
  Icon,
  Segment,
  Feed,
  Divider,
} from 'semantic-ui-react';
import axios from 'axios';
import FeedPost from './FeedPost';

class FeedView extends React.Component {

  state = {
    posts: [{
      text: 'Test',
      likes: 100,
      dislikes: 3,
    },]
  }

  componentDidUpdate() {
    axios.get('localhost:3001/api_posts')
      .then( res => this.setState({
        posts: res,
      }))
  }

  displayPosts = () => {
    return this.state.posts.map(post => {
        return(
        <Segment>
             <Feed.Event>
              <Feed.Label image='/images/avatar/small/joe.jpg' />
              <Feed.Content>
                <Feed.Summary>
                  <a>Joe Henderson</a> posted on his page
                  <Feed.Date>3 days ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra text>
                  {post.text}
                </Feed.Extra>
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name='thumbs up' />
                    {post.likes}
                  </Feed.Like>
                  <Feed.Like>
                    <Icon name='thumbs down' />
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
              <FeedPost/>
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