import styled from 'styled-components';

export const HeaderStyle = styled.header `
    order: 2;

    width: 100%;
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 50px auto;
    @media only screen and (max-width: 600px) {
        grid-template-columns: 121px auto;
    }
`;

export const LogoStyle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;

    width: 100%;
    background-color: rgba(0,0,0,0.9);
    color: rgba(255,255,255,0.9);
    font-size: 0.9rem;
    span {
        color: rgba(190, 0,0,0.4);
        font-size: 1.1rem;
    }

    @media only screen and (max-width: 400px) {
        &.isActive{
            display: none;
        }
    }
`;

export const SearchPanelStyle = styled.div`
   
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 1px rgba(0,0,0,0.1);
    background: rgba(0, 0, 0, 0.8);
    @media only screen and (max-width: 400px) {
        background: rgba(0, 0, 0, 0.9);
        &.isActive{
            grid-column-start: 1;
            grid-column-end: 3;
        }
    }

    .search-belt {
        width: 60%;
        @media only screen and (max-width: 600px) {
                width: 100%;
        }

        display: grid;
        grid-template-columns: auto 60px;
        height: 60%;

        @media only screen and (max-width: 400px) {
            grid-template-columns: 60px;
            justify-content: center;
            &.isActive{
                justify-content: unset;
                grid-template-columns: auto 60px;
            }
        }
        
        input {
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.4);
            border: none;
            color: white;
            border-right: none;
            border-radius: 2px 0 0 2px;
            outline: none;
            padding-left: 5px;
            @media only screen and (max-width: 400px) {
                display: none;
                &.isActive{
                    display: block;
                }
            }
        }
        .icon {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            background: rgba(255, 255, 255, 0.5);
            width: 100%;
            border-radius: 0 2px 2px 0;
            color: white;

            @media only screen and (max-width: 400px) {
                border-radius: 2px 2px 2px 2px;
                &.isActive {
                    border-radius: 0 2px 2px 0;
                }
            }

            &:hover {
                background: rgba(255, 255, 255, 0.6);
            }
            &:active {
                background: rgba(255, 255, 255, 0.3);
            }
            
        }
    }
`;

export const UXguideStyle = styled.div`
    color: rgba(0,0,0,0.7);
    width: 100%;
    grid-column-start: 1;
    grid-column-end: 3;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    min-height: 3rem;
    display: grid;
    grid-template-columns: 20% 80%;


    font-size: 0.7rem;
    div {
        font-size: 0.9rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 10%;
        @media only screen and (max-width: 600px){
            padding-left: 1%
        }
        color: white;
        span{
            font-weight: bolder
        };
        margin: 0;
        width: 100%;
        &:nth-of-type(1){
            background: rgba(0,0,0,0.7);
            @media only screen and (max-width: 600px){
                display: none;
            }
        }
        &:nth-of-type(2){
            @media only screen and (max-width: 600px){
                grid-column-start: 1;
                grid-column-end: 3;
            }
        }
    }
`;