import SearchBar from './components/searchbar/index';
import YoutubeRequest from 'youtube-api-search';
import MovieList from './components/movie-list/index';
import MoviePlay from './components/movie-play/index';
import AlsoInterested from './components/also-interested/index';
import Footer from './components/footer/index';
import {RightColumnWrapper} from './app-style';
import {AppContainer} from './app-style';
import React, { Component } from 'react';

const API_KEY = 'AIzaSyDNPEoPjVzJMueLI8siyZF9AKnvdWUt4T4';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      movies: [],
      default: null,
      title: null,
      proposals: null,
      bigTerm: null,
    };
    this.selectMovie=this.selectMovie.bind(this);
    this.setNewSearchTerm('');
  }
  setNewSearchTerm(word){
    const quest = () => {
      const words = ['awesome', 'new', 'business', 'art', 'politics', 'science', 'music', 'entertainment', 'fail', 'best', 'latest'];
      const num = Math.floor(Math.random() * 10);
      return word+' '+words[num];
    }
    const request = quest();
    YoutubeRequest({key: API_KEY, term: word},
      (data)=>this.setState({
        movies: data,
        default: data[data.length-1],
        title: data[data.length-1].snippet.title,
      }));
      YoutubeRequest({key: API_KEY, term: request},
      (data)=>this.setState({
        proposals: data,
        bigTerm: request
      }));
  }
  selectMovie(newMovie){
    this.setState({
      default: newMovie,
      title: newMovie.snippet.title
    })
    
  }
  render() {
    console.log('pro ' + this.state.proposals)
    console.log('mo ' +this.state.movies)
    return (
      <AppContainer>
        <SearchBar title={this.state.title} changeTerm={(word)=>{this.setNewSearchTerm(word)}}/>
        <RightColumnWrapper>
          <MoviePlay film={this.state.default}/>
          <AlsoInterested selectVid={this.selectMovie} bigterm={this.state.bigTerm} movies={this.state.proposals} />
        </RightColumnWrapper>
        <MovieList selectFilm={this.selectMovie} movies={this.state.movies}/>
        <Footer/>
      </AppContainer>
    );
  }
}

export default App;
