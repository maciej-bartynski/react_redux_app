import React from 'react';
import {AlsoInterestedStyle} from './style.js';
import AlsoItem from './list-item/index.js';


class AlsoInterested extends React.Component{
    
    render(){
        
        return(
            <AlsoInterestedStyle>
                <div className="also">You may also be interested: <span>{this.props.bigterm}</span></div>
                <AlsoItem selectFilm={this.props.selectVid} movies={this.props.movies}/>
            </AlsoInterestedStyle>
        );
    }
   
}

export default AlsoInterested;