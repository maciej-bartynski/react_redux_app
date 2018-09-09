import styled from 'styled-components';
export const AlsoItemStyle = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 30% 70%;

    overflow: hidden;
    border-radius: 3px;
    background-color: rgba(255,255,255,0.2);
    border: solid 1px rgba(255,255,255,0.4);

    transition: all 200ms;
    &:hover {
        background-color: rgba(255,255,255,0.4);
        cursor: pointer;
        transform: scale(1.01)
    };
    .imgposition {
        img{width: 100%};
    };
    .snipposition {  
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        padding: 30px;
        p, h5{
            color: rgba(255,255,255,0.6);
            margin: 0;
            padding: 0;
            padding-left: 1%;
            
        }
        h5 {
            font-size: 1.2rem;
        }
        p {
            font-size: 0.8rem;
        }
    }
`;