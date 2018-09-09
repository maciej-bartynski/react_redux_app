import React from 'react';
import {MoviesListStyle} from './style';
import MovieItem from './list-item/index';

const MovieList = (props) => {
    const titles = props.movies.map((item, idx)=>{
        return(<MovieItem
            key={idx}
            snippet={item.snippet}
            onClick={()=>{props.selectFilm(item)}}
            />);
    })
    return(
        <MoviesListStyle>
            {titles}
        </MoviesListStyle>
    );
    
}

export default MovieList;