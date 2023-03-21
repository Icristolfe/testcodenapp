import styled from 'styled-components'



export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


`

export const ContainerForm = styled.div`
    width: 95%;
    background: #F3F4F6;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
    padding: 30px;
    border-radius: 5px;

    input {
    padding: 8px 16px;
    isolation: isolate;
    width: 280px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #D1D5DB;
    border-radius: 4px;
    }


        div{
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
        }
    


    .alignButton{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px 0;
    }
`

export const Label = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.002em;
  color: #131313;
  padding-left: 10px;
`

export const Button = styled.button`
    margin-top: 20px;
    background: #60B85C;
    color: #FFF;
    border: none;
    width: 150px ;
    height: 25px ;
    border-radius: 6px;
    cursor: pointer;

    &&:hover {
        opacity:0.8
    }

    &&:active {
        opacity:0.6
    }
`
