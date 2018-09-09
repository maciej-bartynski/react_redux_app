import styled from 'styled-components'
export const AppContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const RightColumnWrapper = styled.div`
    order: 4;
    width: 80%;
    
    @media only screen and (max-width: 600px){
        order:3;
        width: 100%;
    }
`;