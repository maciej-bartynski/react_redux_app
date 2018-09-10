
import React from 'react';
import YoutubeRequest from 'youtube-api-search';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {downloadProposalFilmsAction} from './../../actions/proposal-films';

const API_KEY = 'AIzaSyDNPEoPjVzJMueLI8siyZF9AKnvdWUt4T4';

const Requestb = (props) => {
    const word = props.term;
    YoutubeRequest({key: API_KEY, term: word},
      (data)=>{props.proposalFilms(data)}
    );
    return null
}

function mapStateToProps(state){
    return {
        term: state.proposalTerm,
    }
}

function mapDispatchToProps(dispatch){
   return bindActionCreators({proposalFilms: downloadProposalFilmsAction}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Requestb);