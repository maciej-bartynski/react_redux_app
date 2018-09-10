import React from 'react';
import {MoviesListStyle} from './style';
import MovieItem from './list-item/index';
import {UXguideStyle} from './style.js';
import {connect} from 'react-redux';

const MovieList = (props) => {
    
    //if (!props.movies){
    //    return null;
   // }

    var listHeader;
    var titles;
    console.log(props.movies)
    if (!props.term&&props.movies){
        titles = props.movies.map((item, idx)=>{
            return(<MovieItem key={idx} video={item}/>);
        });
        listHeader = <div>Random playlist:</div>
    } else if(!props.movies){
        listHeader=(<div>Sorry, something went wrong.
            Probably daily request limit has been<span>exceed</span>.
            Please come back later.</div>)
    } else if(props.term&&props.movies.length===0){
        listHeader=<div>No videos available for <span>{props.term}</span></div>
    } else {
        titles = props.movies.map((item, idx)=>{
            return(<MovieItem key={idx} video={item}/>);
        });
        listHeader = <div>Playlist:<span>{' '+props.term}</span></div>
    }
    
    //const titles = props.movies.map((item, idx)=>{
    //    return(<MovieItem key={idx} video={item}/>);
    //})

    return(
        <MoviesListStyle>
            <UXguideStyle>
                {listHeader}
            </UXguideStyle>
            {titles}
        </MoviesListStyle>
    );
    
}

function mapStateToProps(state){
  return {
    movies: state.films,
    term: state.searchTerm
  }
}

export default connect(mapStateToProps)(MovieList);