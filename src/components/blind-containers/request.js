
import React from 'react';
import YoutubeRequest from 'youtube-api-search';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {downloadFilmsAction} from './../../actions/download-films';

const API_KEY = 'AIzaSyDNPEoPjVzJMueLI8siyZF9AKnvdWUt4T4';

const Request = (props) => {
    const val = props.term;
    YoutubeRequest({key: API_KEY, term: val},
        (data)=>{props.downloadFilms(data)}
    );
    return null
}

function mapStateToProps(state){
    return {
        term: state.searchTerm,
    }
}

function mapDispatchToProps(dispatch){
   return bindActionCreators({downloadFilms: downloadFilmsAction}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Request);