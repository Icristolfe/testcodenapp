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
    display: ${props => props.showDisplay ? "block" : "hidden"} ;
    width: 95%;
    background: #F3F4F6;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
    padding-top: 30px;
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

    .editContainerTop{
        display: flex;
        margin-bottom: 30px;
        gap: 30px;

        div{
            display: flex;
            flex-direction: column;
            
        }
    }

    .editContainerBottom{
        display: flex;
        gap: 30px;

        div{
            display: flex;
            flex-direction: column;
        }
    }

    .alignButton{
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
    background: ${props => (props.isForm ? "#60B85C" : "none")};
    color: ${props => props.isForm ? "#FFF" : "none"};
    border: none;
    width: ${props => props.isForm ? "150px" : "max-content"};
    height:${props => props.isForm ? "25px" : "max-content"} ;
    border-radius: ${props =>props.isForm ? "5px" : "none"};
    cursor: pointer;

    &&:hover {
        opacity:0.8
    }

    &&:active {
        opacity:0.6
    }
`

export const InfoContainer = styled.div`
  width: 100%;
  height: 68px;
  background: #F3F4F6;
  display: grid;
  grid-template-columns: 0.5fr 1.5fr 1fr 1.5fr 0.5fr ;
  align-items: center;
  justify-items: center;
  padding-right: 20px;
  margin-bottom: 8px;

  p {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.002em;
  color: #131313;
  
  }



`


export const ContainerItens = styled.div`
  width: 95% ;

 .dataTable{
  width: 100%;
  height: 58px;
  background: #F3F4F6;
  border-radius: 6px 6px 0px 0px;
  display: grid;
  grid-template-columns: 0.5fr 1.5fr 1fr 1.5fr 0.5fr ;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  justify-items: center;
  padding-right: 20px;

  p {
  font-weight: 600;
  }
 }

`