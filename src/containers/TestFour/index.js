import React, { useState } from "react";
import axios from "axios";

import {
  Button,
  Container,
  ContainerForm,
  Label,

} from './style';
import Header from "../../components/Header";

export const TestFour = () => {

  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [pais, setPais] = useState("Brasil");

  const handleCepChange = async (event) => {
    const novoCep = event.target.value;
    setCep(novoCep);

    if (novoCep.length === 8) {
      const url = `https://viacep.com.br/ws/${novoCep}/json/`;
      try {
        const response = await axios.get(url);
        const { logradouro, bairro, localidade, uf } = response.data;
        setEndereco(logradouro);
        setBairro(bairro);
        setCidade(localidade);
        setUf(uf);
      } catch (error) {
        console.log(error);
      }
    }
  };
  
  function handleAddress(event){

    event.preventDefault();
    if(!cep || !endereco || !bairro || !cidade || !uf || !pais){
       alert(`Digite seu endereço`)
    }
    else {
       alert(`Endereço enviado com sucesso`)

       setTimeout(() => {
       setCep("")
       setEndereco("")
       setBairro("")
       setCidade("")
       setUf("")
       }, 1000);
       

    }
  }

  return (
    <>
    <Header />

    <Container>
      
    <h1>Endereço</h1>
      <ContainerForm>
    <form onSubmit={handleAddress}>

      <div>
        <Label> CEP </Label>
          <input type="text" value={cep} onChange={handleCepChange} maxLength={8} />
          
      </div>
      
      <div>
      <Label>Endereço</Label>
        <input type="text" value={endereco} onChange={(event) => setEndereco(event.target.value)}  />
      </div>
      
      <div>
      <Label>Bairro</Label>
        <input type="text" value={bairro} onChange={(event) => setBairro(event.target.value)}  />
        </div>

      <div>
      <Label>Cidade</Label>
        <input type="text" value={cidade} onChange={(event) => setCidade(event.target.value)} disabled={!!cidade} />
      
      </div>
     
      <div>

      <Label>UF</Label>
        <input type="text" value={uf} onChange={(event) => setUf(event.target.value)} disabled={!!uf} maxLength={2} />
    
      </div>

      <div>
      <Label>País</Label>
        <input type="text" value={pais} onChange={(event) => setPais(event.target.value)} disabled={!!pais} />
      </div>
      
     <div className="alignButton">
     <Button type="submit" value="Enviar" >Enviar</Button>
     </div>
     

      
    </form>
    </ContainerForm>
    </Container>
    </>
  );
};

