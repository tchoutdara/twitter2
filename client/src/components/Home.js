import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react';
import styled, { css, keyframes } from 'styled-components';
import Twitter from '../Images/Twitter.png';
import Angry from '../Images/Angry.jpeg';
import Happy from '../Images/Happy.jpeg';
import Tocan from '../Images/Tocan.jpeg';
import Scared from '../Images/Scared.png';


class Home extends Component {

  state = { 
    i: 0,
    photos: [
      <Loop src={Angry} alt="Angry Bird"/>,
      <Loop src={Happy} alt="Happy Bird"/>,
      <Loop src={Tocan} alt="Tocand"/>,
      <Loop src={Scared} alt="Scared Bird"/>,
  ],
   }

   componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({i: this.state.i + 1})
      if(this.state.i >= this.state.photos.length){
        this.setState({i: 0})
      }
    }, 2000)
  }
  // Interval must be double of Animation length

  componentWillUnomount(){
    clearInterval(this.interval)
  }

  ArrayLoop = () => {
    let {i, photos} = this.state
    for(i; photos.length;){
      return(photos[i])
    }
  }

  render() {
    return (
      <>
      <Header as="h1" textAlign="center">Welcome to Twitter 2 <Image src={Twitter} size='mini' alt="twitter logo"/></Header> 
      <Center>{this.ArrayLoop()}</Center>
      </>
    );
  }
}

const pulse = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const animation = props =>
  css`
    ${pulse} ${props.animationLength} 1s infinite alternate; 
  `

// Animation length must be half of set interval

const Loop = styled.img`
  height: 25em;
  width: 25em;
  animation: ${animation};
  margin-right: 10em;
  margin-top: 3em;
  @media only screen and (max-width: 568px) {
    width: 10em;
    height: 10em;
  }
  @media only screen and (max-height: 411) {
    height: 15em;
    width: 15em;
  }
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 6em;
`

export default Home;

