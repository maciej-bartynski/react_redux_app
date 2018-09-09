import React from 'react';
import {AlsoInterestedStyle} from './style.js';
import AlsoItem from './list-item/index.js';
import {connect} from 'react-redux';

class AlsoInterested extends React.Component{
    
    render(){
        return(
            <AlsoInterestedStyle>
                <div className="also">You may also be interested: <span>{this.props.proposalterm}</span></div>
                <AlsoItem />
            </AlsoInterestedStyle>
        );
    }
   
}

function mapStateToProps(state){
    return {
        proposalterm: state.proposalTerm
    }
}

export default connect(mapStateToProps)(AlsoInterested);