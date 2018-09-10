import React from 'react';
import {FooterStyle} from './style';

class Footer extends React.Component {
    render(){
        return(
            <FooterStyle>
                <div className="footer-title">Crafted by Maciej Bartyński</div>
                <div className="footer-title">maciek.bartynski@gmail.com</div>
                <div className="footer-title">784 482 159 (Poland)</div>
                <div className="footer-tools">
                    <p>Redux</p>
                    <p>Action creators</p>
                    <p>Combined root reducer</p>
                </div>
                <div className="footer-desc">
                    <h6>What's the purpose of inventing Youtube again?</h6>
                    <h6>
                        None, of course, but I invite you my own React military training ground:
                        here is where I tested front-end arsenal and I trained myself to be React ninja.
                        This excercise app is based on example app by Stephen Grider
                        ('Modern React with Redux' course, available on Udemy),
                        but redesigned on my own fashion.  
                    </h6>
                </div>
                <div className="footer-tools">
                    <p>React</p>
                    <p>Styled components</p>
                    <p>API</p>
                    <p>React props and states</p>
                    <p>'Null' request handling</p>
                    <p>Controlled components</p>
                    <p>Function components</p>
                    <p>Class components</p>
                    <p>Youtube search</p>
                    <p>UX providing</p>
                    <p>RWD design</p>
                </div>
                <div className="footer-desc">
                    <h6>How it works?</h6>
                    <h6>
                        Left column displays max. 5 videos found via YoutubeSearch (npm package),
                        search based on user's key words.
                    </h6>
                    <h6>
                        Right column (under the current video), displays 5 more videos selected
                        by user term concatenated with randomly choosen word from array:
                        ['awesome', 'new', 'business', 'art', 'politics', 'science', 'music', 'entertainment', 'fail', 'best', 'latest']
                    </h6>
                </div>
                <div className="footer-tools">
                    <p>GIT</p>
                    <p>Components lifecycle</p>
                    <p>Asynchronous code inside components</p>
                    <p>Nested styles</p>
                    <p>CSS Grid</p>
                    <p>CSS Flexbox</p>
                </div>
            </FooterStyle>
        );
    }
}

export default Footer