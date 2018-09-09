import {HeaderStyle} from './style.js';
import {SearchPanelStyle} from './style.js';
import {LogoStyle} from './style.js'
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { searchTermAction } from './../../actions/search-term';

library.add(faSearch);

class SearchBar extends React.Component{
    searchTermChange(e){
        const ad = item => {
            item.classList.contains('isActive')?
            item.classList.remove('isActive')
            :
            item.classList.add('isActive')
        };
        const rem = item => {
            item.classList.remove('isActive');
            if(item.value){item.value=null};
        };
        const switchVisuality = (fun) => {
            fun(document.querySelectorAll('.switch_visuality')[0]);
            fun(document.querySelectorAll('.switch_visuality')[1]);
            fun(document.querySelectorAll('.switch_visuality')[2]);
            fun(document.querySelectorAll('.switch_visuality')[3]);
            fun(document.querySelectorAll('.switch_visuality')[4]);
        }
        let val = document.querySelector('.inputsearch').value.trim();
        if(!val){
            switchVisuality(ad);
        } else {
            switchVisuality(rem);
            this.props.searchTerm(val)
        }
    }

    render(){
        return(
            <HeaderStyle className="headerbar">
                
                <LogoStyle className="switch_visuality">
                    <span>H</span>ome<span>C</span>inema
                </LogoStyle>

                <SearchPanelStyle className="switch_visuality">
                    <div className="search-belt switch_visuality">
                        <input className="inputsearch switch_visuality"
                            onKeyUp={(e)=>{if(e.keyCode===13){this.searchTermChange(e)}}}
                        />
                        <div
                            className="icon switch_visuality"
                            onClick={(e)=>{this.searchTermChange(e)}}
                        >
                            <FontAwesomeIcon icon={faSearch}/>
                        </div>
                    </div>            
                </SearchPanelStyle>

            </HeaderStyle>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({searchTerm: searchTermAction}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);