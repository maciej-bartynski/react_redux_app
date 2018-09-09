import React from 'react';
import {MoviesListStyle} from './style';
import MovieItem from './list-item/index';
import {UXguideStyle} from './style.js';
import {connect} from 'react-redux';

const MovieList = (props) => {
    
    if (!props.movies){
        return null;
    }

    var listHeader;

    if (!props.term){
        listHeader = <div>Random playlist:</div>
    } else {
        listHeader = <div>Playlist:<span>{' '+props.term}</span></div>
    }
    
    const titles = props.movies.map((item, idx)=>{
        return(<MovieItem key={idx} video={item}/>);
    })

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