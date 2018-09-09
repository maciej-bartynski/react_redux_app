
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {proposalTermAction} from './../actions/proposal-term';

const ProposalTerm = (props) => {
    const word = props.term;
    const words = ['awesome', 'new', 'business', 'art', 'politics', 'science', 'music', 'entertainment', 'fail', 'best', 'latest'];
    const num = Math.floor(Math.random() * 10);
    props.proposalTerm(word+' '+words[num]);   
    return null
}

function mapStateToProps(state){
    return {
        term: state.searchTerm,
    }
}

function mapDispatchToProps(dispatch){
   return bindActionCreators({proposalTerm: proposalTermAction}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProposalTerm);