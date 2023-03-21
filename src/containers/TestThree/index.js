
import React,{ useState, useRef } from 'react'
import * as Yup from 'yup'

import Header from '../../components/Header';

import {
  Button,
  Container,
  ContainerForm,
  Label,

} from './style';

export function TestThree() {
  const [ user, setUser] = useState()
  const nomeRef = useRef();
  const emailRef = useRef();
  const telefoneRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();


  const schema = Yup.object().shape({
    name: Yup.string().required('O seu nome é obrigatório'),
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
      telefone: Yup.number()
      .required('O Telefone é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter no mínimo 6 digitos'),
    passwordConfirmation: Yup.string()
      .required('A confirmação de senha é obrigatória')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
  })

   window.onbeforeunload = function() {
    if(window.location.href.indexOf('/test3') > -1) {
        window.location.href = 'https://cristolfetestapp.netlify.app/';
    }
}

async function submit(event){
  
  event.preventDefault();



const client = {

  name: nomeRef.current.value,
  email: emailRef.current.value,
  telefone: telefoneRef.current.value,
  password: passwordRef.current.value,
  passwordConfirmation: confirmPasswordRef.current.value
}

await schema.isValid(client)
.then( valid => { 
  
  if(valid){
  return setUser(client) 
  }
  else {
    return alert('cadastro nao realizado')
  }
});

}
  
 

  return (
    <>
    <Header />
    
    <Container>

       {
        user ? (
          <h1>Seja bem vindo {user.name}</h1>
        ) : (
          <h1>Cadastre-se </h1>
  )
      }
      <ContainerForm>
        <form onSubmit={submit}>

        <div>
        <Label>Nome</Label>
            <input
            ref={nomeRef}
              type="text"
              id="name"
              placeholder="Nome"
            />
        </div>

        <div>
        <Label>Email</Label>
          <input
          ref={emailRef}
            type="email"
            placeholder="Email"
          />
        </div>

        <div>
          <Label>Telefone</Label>
          <input
          ref={telefoneRef}
            type="text"
            placeholder="Telefone"
          />
        </div>

        <div>
          <Label>Senha</Label>
          <input
          ref={passwordRef}
            type="password"
            placeholder="Senha"
          />
        </div>

        <div>
          <Label>Confirmar Senha</Label>
          <input
            ref={confirmPasswordRef}
            type="password"
            placeholder="Confirmar Senha"
          />
        </div>
        <div className="alignButton">
        <Button type="submit">Cadastrar</Button>
        </div>
        </form>
      </ContainerForm>

     
      
    </Container>

    </>
  );
}