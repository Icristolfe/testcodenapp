import React, { useState, useRef } from 'react'
import Header from '../../components/Header';

import { Container, ContainerForm, InfoContainer, Label, Button, ContainerItens } from './style';



export function TestOne() {
  let itensTabela = [
    {
      id: 1,
      dataCadastro: "2020-12-01",
      valor: 34.5,
      telefone: "00000000000",
      permiteEdicao: false
    },
    {
      id: 2,
      dataCadastro: "2020-12-04",
      valor: 31.56,
      telefone: "00000000000",
      permiteEdicao: true
    },
    {
      id: 3,
      dataCadastro: "2021-01-23",
      valor: 124.1,
      telefone: "00000000000",
      permiteEdicao: true
    },
    {
      id: 4,
      dataCadastro: "2021-04-18",
      valor: 242.99,
      telefone: "00000000000",
      permiteEdicao: true
    }
  ];

  const [showForm, setShowForm] = useState(false);
  const [valueID, setValueID] = useState(0);
  const [valueDataCadastro, setValueDataCadastro] = useState("00/00/0000");
  const [valueTelefone, setValueTelefone] = useState("");
  const [valueValor, setValueValor] = useState("");
  const [tabela, setTabela] = useState(itensTabela)

  const novoTelefoneRef = useRef();
  const novoValorRef = useRef();

  const formatDate = date => {
    return new Date(date).toLocaleDateString('pt-br', {
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const formatCurrency = value => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  function formatPhoneNumber(phoneNumberString) {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const novoTelefone = novoTelefoneRef.current.value;
    const novoValor = novoValorRef.current.value;

    const novosItens = tabela.map((item) => {
      if (item.id === valueID) {
        return {
          ...item,
          telefone: novoTelefone,
          valor: novoValor,
        };
      }
      return item;
    });

    setTabela(novosItens);
    setValueID(0);
  };

  function handleEdit(item) {
    setShowForm(true)
    setValueID(item.id)
    setValueDataCadastro(item.dataCadastro)
    setValueValor(item.valor)
    setValueTelefone(item.telefone)
  }



  function handleHiddenForm() {
    setTimeout(() => {
      setShowForm(false)
    }, 1000);

  }


  return (
    <>
    <Header />
      <Container>
      

        {
          showForm &&
          <ContainerForm>

            <h4>Editando Registro</h4>
            <form onSubmit={handleSubmit} style={{ marginBottom: "25px" }}>

              <div>
                <div className="editContainerTop">
                  <div>
                    <Label>ID</Label>
                    <input type="text" value={valueID} disabled />
                  </div>

                  <div>
                    <Label>Data de Cadastro</Label>
                    <input type="text" value={valueDataCadastro} disabled />
                  </div>
                </div>

                <div className="editContainerBottom">

                  <div>
                    <Label>Valor (R$)</Label>
                    <input
                      ref={novoValorRef}
                      type="text"
                      onChange={(e) => {
                        e.preventDefault();
                        setValueValor(e.target.value);
                      }}
                      value={valueValor}
                    />
                  </div>

                  <div>
                    <Label>Telefone</Label>
                    <input
                      ref={novoTelefoneRef}
                      type="text"
                      onChange={(e) => {
                        e.preventDefault();
                        setValueTelefone(e.target.value);
                      }}
                      value={valueTelefone}
                    />
                  </div>
                </div>



              </div>
              <div className="alignButton">
                <Button
                  isForm={true}
                  type="submit"
                  onClick={() => { handleHiddenForm() }}>
                  Alterar
                </Button>
              </div>
            </form>
          </ContainerForm>
        }


        <ContainerItens>

          <div className="dataTable">

            <p>ID</p>
            <p>Data de Cadastro</p>
            <p>Valor (R$)</p>
            <p>Telefone</p>
            <p>Editar</p>

          </div>

          {
            tabela.map((item) => {

              return (
                <InfoContainer key={item.id}>
                  <p>{item.id}</p>
                  <p>{formatDate(item.dataCadastro)}</p>
                  <p>{formatCurrency(item.valor)}</p>
                  <p>{formatPhoneNumber(item.telefone)}</p>
                  <p>
                    {
                    item.permiteEdicao ? (
                      <Button onClick={() => { handleEdit(item); setShowForm(true); setValueID(item.id) }} >
                        <svg viewBox="0 0 512 512" width="20" title="pencil-alt" >
                          <path d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z" />
                        </svg>
                      </Button>) : ""

                  }
                  </p>
                </InfoContainer>
              );
            })}
        </ContainerItens>
        
      </Container>
    </>
  );
}
