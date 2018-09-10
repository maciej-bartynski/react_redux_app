import React from 'react';
import {connect} from 'react-redux';
import {MoviePlayStyles} from './style.js';
import {UXguideStyle} from './style.js';


class MoviePlay extends React.Component {
   
    constructor(props){
        super(props);
        this.listenIfFixIt=this.listenIfFixIt.bind(this);
    }

    listenIfFixIt(){
        let frame = document.querySelector(".playerframe");
        let position = frame.offsetTop;
        if (window.pageYOffset>position){
            frame.classList.add("fixed");
        } else {
            frame.classList.remove("fixed");
        }
    }

    componentDidUpdate() {
        window.removeEventListener("scroll", this.listenIfFixIt);
        if (document.querySelector('.playerframe')){
            let theComponent = document.querySelector('.playerframe');
            theComponent.classList.add('fadein');
            window.addEventListener('scroll', this.listenIfFixIt)
        }
    }
   
    render() {

        if(!this.props.film){
            return(
                <MoviePlayStyles>
                    <p>All movies come from Youtube.</p>
                    <p style={{padding: '1%', fontSize: '0.7rem'}}>
                        Left column (for mobile: the last one list) containts matches exact to your search term,<br/>
                        bottom list (for mobile: the first one list) contains matches to the search term extended with randomly choosen popular tag.
                    </p>
                </MoviePlayStyles>
            )
        }
        
        const movie = this.props.film;
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
    
                <UXguideStyle className='UXguide'>
                    <div>Watch: <span>{this.props.film.snippet.title}</span></div>
                </UXguideStyle>
                
                <div className="title">
                    <h2 onClick={(e)=>{setSize(0)}}>BIGGER</h2>
                    <h2 onClick={(e)=>{setSize(1)}}>SMALLER</h2>
                </div>

                <div className="player">
                    <iframe 
                    title={movie.snippet.title+' - see more: '+url} 
                    frameboarder="0" className="player_iframe" 
                    src={url}>
                    </iframe>
                </div>

                <div className="description">
                        <p>{movie.snippet.description}</p>
                </div>

            </MoviePlayStyles>    
        );
    }
}

function mapStateToProps(state){
    return {
        film: state.activeFilm,
    };
}

export default connect(mapStateToProps)(MoviePlay);