import SearchBar from './components/searchbar/index';
import MovieList from './components/movie-list/index';
import MoviePlay from './components/movie-play/index';
import AlsoInterested from './components/also-interested/index';
import Footer from './components/footer/index';
import {RightColumnWrapper} from './app-style';
import {AppContainer} from './app-style';
import React, { Component } from 'react';
import Request from './components/blind-containers/request.js';
import Requestb from './components/blind-containers/requestb.js';
import ProposalTerm from './components/blind-containers/termb.js';

class App extends Component {
  
  render() {
    return (
      <AppContainer>
        <SearchBar />
        <RightColumnWrapper>
          <MoviePlay />
          <AlsoInterested />
        </RightColumnWrapper>
        <MovieList />
        <Footer/>
        <Request/>
        <Requestb/>
        <ProposalTerm/>
      </AppContainer>
    );
  }
}

export default App;
