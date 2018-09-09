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