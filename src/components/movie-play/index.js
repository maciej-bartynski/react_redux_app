import React from 'react';
import {connect} from 'react-redux';
import {MoviePlayStyles} from './style.js';
import {UXguideStyle} from './style.js';

const MoviePlay = (props) => {
   
    if(!props.film){
        return <MoviePlayStyles>
                <p>Something went wrong...</p>
                <p>Probably there are no videos available under current search conditions, or <br/>
                API key daily limit has been exceed. Please come back later.</p>
            </MoviePlayStyles>
    }
    
    const movie = props.film;
    const id = movie.id.videoId;
    const url = `https://youtube.com/embed/${id}`
    
    const setSize = (num) => {
        const ad = (item)=>{
            item.classList.add('bigger')};
        const rem = (item)=>{item.classList.remove('bigger')};
        const switchScreen = (fun) => {
            fun(document.querySelector('.playerframe'))
        };
        num===0?switchScreen(ad):switchScreen(rem);
    }

    return (        
        <MoviePlayStyles className='playerframe'>
  
            <UXguideStyle>
                <div>Watch: <span>{props.film.snippet.title}</span></div>
            </UXguideStyle>
             
            <div className="title">
                <h2 onClick={(e)=>{setSize(0)}}>BIGGER</h2>
                <h2 onClick={(e)=>{setSize(1)}}>SMALLER</h2>
            </div>

            <div className="player">
                <iframe title={movie.snippet.title+' - see more: '+url} frameboarder="0" className="player_iframe" src={url}></iframe>
            </div>

            <div className="description">
                    <p>{movie.snippet.description}</p>
            </div>
        </MoviePlayStyles>    
    );
}

function mapStateToProps(state){
    return {
        film: state.activeFilm
    };
}

export default connect(mapStateToProps)(MoviePlay);