import styled from 'styled-components';

export const MoviesListStyle = styled.ul`
    order:3;

    width: 20%;
    margin: 0;
    
    @media only screen and (max-width: 600px){
        width: 100%;
        order: 4;
    }
    list-style: none;
    padding: 1%;
    padding-top:0;
    background: rgba(0,0,0,0.7);

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
        @media only screen and (max-width: 600px){
            padding-left: 1%
        }
        color: white;
        span{
            font-weight: bolder
        };
        margin: 0;
        width: 100%;
    }
`;