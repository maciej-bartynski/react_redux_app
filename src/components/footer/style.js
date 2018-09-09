import styled from 'styled-components';

export const FooterStyle = styled.footer`
    width: 100%;
    background: rgba(0,0,0,0.8);
    color: rgba(255,255,255,0.5);

    order: 6;

    min-height: 100vh;

    .footer-title{
        margin: 50px 0;
        text-align: center;
    }
    .footer-desc {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        margin: 0 auto;
        width: 60%;
        @media only screen and (max-width: 600px){
            width: 95%;
        }
    }
    .footer-tools {
        margin: 0 auto;
        width: 60%;
        @media only screen and (max-width: 600px){
            width: 95%;
        }
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        p{
            background: rgba(255, 255, 255, 0.3);
            color: black;
            border-radius: 3px;
            padding: 5px;
            margin-right: 5px;
        }
        flex-wrap: wrap;
    }
`;