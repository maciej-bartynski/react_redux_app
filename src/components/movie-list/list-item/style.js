import styled from 'styled-components';

export const MovieItemStyle = styled.li`
    width: 100%;
    box-sizing: border-box;
    border: solid 1px rgba(255,255,255,0.3);
    background: rgba(255,255,255,0.1);

    overflow: hidden;
    border-radius: 2px;
    &+&{
        margin-top: 5px;
    }

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto auto;

    cursor: pointer;
    transition: all 200ms;
    &:hover {
        background: rgb(40,40,40);
        
        top:0;
        left:0;
        margin:2.8% 0;
        transform: scale(1.05);
    }
    
    img {
        width: 100%;
    }

    h1 {
        font-size: 13px;
        color: white;
    }

    div {
        padding: 0 10px;
        font-size: 12px;
        color: white;
    }
` 