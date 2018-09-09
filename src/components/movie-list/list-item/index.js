import React from 'react';
import {MovieItemStyle} from './style';

const MovieItem = (props) => {
        return(
            <MovieItemStyle onClick={props.onClick}>
                <img alt = '' src={props.snippet.thumbnails.default.url}/>
                <div>
                    <h1>{props.snippet.title}</h1>
                    <p>{props.snippet.description}</p>
                </div>
            </MovieItemStyle>
        );
    
}

export default MovieItem;