
import React,{ useState } from 'react'

import { Container, ContainerForm, InfoContainer, ContainerItens } from './style';

import Header from '../../components/Header';

export function TestTwo() {
  let itensTabela = [
    {
      id: 1,
      nome: "Fulano da Silva",
      telefone: "(27) 993234-4353",
      email: "fulanodasilva@hotmail.com"
    },
    {
      id: 2,
      nome: "João da Costa Silva",
      telefone: "(27) 994354-4365",
      email: "joaozinho@hotmail.com"
    },
    {
      id: 3,
      nome: "Beltrano Souza",
      telefone: "(27) 998475-1456",
      email: "beltrano@gmail.com"
    },
    {
      id: 4,
      nome: "Luiz Beltrano da Silva",
      telefone: "(27) 998847-9854",
      email: "luizbs@codenapp.com"
    },
    {
      id: 5,
      nome: "Washington Oliverita",
      telefone: "(27) 999432-1453",
      email: "woliveira@yahoo.com"
    },
    {
      id: 6,
      nome: "Pedro Álvares Cabral",
      telefone: "(27) 999847-1432Ω",
      email: "pedroalvarescabral@descobrimento.com.br"
    }
  ];

  const [ filterTable, setFilterTable ] = useState()
  const [tabela, setTabela] = useState(itensTabela)
  const [ inputValue, setInputValue ] = useState('')


  
 function handleClick(e){
    setTabela()
    if(inputValue.length >1) {
      const newTable = itensTabela.filter((item) =>{
        return item.nome.startsWith(inputValue)
      })
      setFilterTable(newTable)
    }
    else {
      setFilterTable(null)
    }

  }

  window.onbeforeunload = function() {
    if(window.location.href.indexOf('/test2') > -1) {
        window.location.href = 'https://cristolfetestapp.netlify.app/';
    }
}
  

  return (

    <>
    <Header />
    
    <Container>
      <ContainerForm>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => { setInputValue(e.target.value);
            handleClick() }}
            placeholder="Digite um nome e pesquise por ele"
          />
        </div>
      </ContainerForm>
      
      <ContainerItens>

<div className="dataTable">

  <p>ID</p>
  <p>Nome</p>
  <p>Telefone</p>
  <p>Email</p>

</div>  
    {
      filterTable ? (
        filterTable.map((item) => {
          return (
            <InfoContainer key={item.id}>
              <p>{item.id}</p>
              <p>{item.nome}</p>
              <p>{item.telefone}</p>
              <p>{item.email}</p>
              
            </InfoContainer>
          );
        })
      ) : (
        tabela.map((item) => {
          return (
            <InfoContainer key={item.id}>
              <p>{item.id}</p>
              <p>{item.nome}</p>
              <p>{item.telefone}</p>
              <p>{item.email}</p>
              
            </InfoContainer>
          );
        })
      )
    }

</ContainerItens>
    </Container>
    </>
  );
}