import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background: #e0e0e0;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    button{
    margin-top: 20px;
    background: #60B85C;
    color: #FFF;
    border: none;
    width: 150px ;
    height: 25px ;
    border-radius: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 6px;

    
    }

    button:hover {
        opacity:0.8
    }

    button:active {
        opacity:0.6
    }
`