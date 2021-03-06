import React from 'react';
import {AlsoItemStyle} from './style';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { selectFilmAction } from '../../../actions/select-movie';

class AlsoItem extends React.Component {
    render(){
        
        if(!this.props.movies){
            return(<AlsoItemStyle>Currently no other proposals are available.</AlsoItemStyle>)
        } 
        
        var proposalList = this.props.movies.map((movie, idx)=>{
            return(
                <AlsoItemStyle key={idx}
                    onClick={(e)=>{this.props.selectFilm(movie)}}
                >
                    <div className="imgposition">
                        <img alt=" " src={movie.snippet.thumbnails.default.url}/>
                    </div>   
                    <div className="snipposition"> 
                        <h5>{movie.snippet.title}</h5>
                        <p>{movie.snippet.description}</p>
                    </div>
                </AlsoItemStyle>
            );    
        })
        
        return (
            <div>{proposalList}</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.proposalFilms
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectFilm: selectFilmAction}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AlsoItem);


