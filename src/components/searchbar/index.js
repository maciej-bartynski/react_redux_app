import {HeaderStyle} from './style.js';
import {SearchPanelStyle} from './style.js';
import {UXguideStyle} from './style.js';
import {LogoStyle} from './style.js'
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
library.add(faSearch)
class SearchBar extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            searchTerm: ''
        }
        this.setTermChange=this.searchTermChange.bind(this);
    }

    UXguide(){
        return( 
            this.state.searchTerm.trim().length>0?
            <UXguideStyle>
                <div>Playlist: <span>{' '+this.state.searchTerm}</span></div>
                <div>Watch: <span>{this.props.title}</span></div>
            </UXguideStyle>
            :
            <UXguideStyle>
                <div>Random playlist:</div>
                <div>Watch: <span>{this.props.title}</span></div>
            </UXguideStyle>
        );
    }

    searchTermChange(e){
        const ad = item => {
            item.classList.contains('isActive')?
            item.classList.remove('isActive')
            :
            item.classList.add('isActive')
        };
        const rem = item => {
            item.classList.remove('isActive');
            item.value?item.value=null:item;
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
            this.setState({searchTerm: val})
            this.props.changeTerm(val);
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
                        onKeyUp={(e)=>{if(e.keyCode===13){this.setTermChange(e)}}}
                        />
                        <div
                        className="icon switch_visuality"
                        onClick={(e)=>{this.setTermChange(e)}}
                        >
                            <FontAwesomeIcon icon={faSearch}/>
                        </div>
                    </div>            
                </SearchPanelStyle>

                {this.UXguide()}
            </HeaderStyle>
        );
    }
}

export default SearchBar;