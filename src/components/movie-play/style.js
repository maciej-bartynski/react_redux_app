import styled from 'styled-components';

export const MoviePlayStyles = styled.div`
    
    position: relative;
    border: solid 1px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    background: rgba(0,0,0,0.6);
    color: rgba(255,255,255,0.5);

    .player {
        width: 100%;
        background: rgba(0,0,0,0.5);
        position: relative;
        padding-top: 56.25%;
        iframe.player_iframe{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
        }
    }

    .title {
        width: 100%;
        padding: 10px;
        display: flex;
        justify-content: center;
        position: absolute;
        top: 60%;
        
        left: 0;
        z-index: 100;
        h2 {
            font-size: 12px;
            color: transparent;
            margin-left: 15px;
            padding: 0;
            cursor: pointer;
        }
        @media only screen and (max-width: 600px){
            display:none;
        }

    }
    &:hover .title{
        background: rgba(0,0,0,0.8);
        h2 {
            color: rgba(255,255,255,0.9);
            background: rgba(0, 0, 0, 1);
        }
    }

    .description {
        width: 100%;
        padding: 10px;
        p {
            font-size: 11px;
            color: rgba(255,255,255,0.3);
            margin: 0;
            padding: 0;
        }
    }

    &.bigger {
        width: 100%;
    }

    @media only screen and (max-width: 600px){
        width: 100%;
    }
`;

export const UXguideStyle = styled.div `
    color: rgba(0,0,0,0.7);
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    min-height: 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    div {
        font-size: 0.9rem;
        padding-left: 1%;
        color: white;
        span{
            font-weight: bolder
        };
        margin: 0;
        width: 100%;
    }
`;