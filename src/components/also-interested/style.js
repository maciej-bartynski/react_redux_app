import styled from 'styled-components';

export const AlsoInterestedStyle = styled.div`
    width: 80%;
    color: rgba(255,255,255,0.7);
    margin: 0 auto;

    @media only screen and (max-width: 600px){
        width: 100%;
        padding-left: 1%;
    }
    .also {
        text-transform: uppercase;
        padding: 20px 0;
        font-size: 0.9rem;
        span{
            font-weight: bolder;
        }
    }
`;