import React from 'react';
import {MovieItemStyle} from './style';

import {selectFilmAction} from './../../../actions/select-movie.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


const MovieItem = (props) => {

        return(
            <MovieItemStyle onClick={(e)=>{props.selectFilm(props.video)}}> 
                <img alt = '' src={props.video.snippet.thumbnails.default.url}/>
                <div>
                    <h1>{props.video.snippet.title}</h1>
                    <p>{props.video.snippet.description}</p>
                </div>
            </MovieItemStyle>
        );
    
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({selectFilm: selectFilmAction}, dispatch);
}

export default connect(null, mapDispatchToProps)(MovieItem);