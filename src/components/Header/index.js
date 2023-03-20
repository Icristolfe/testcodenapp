import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Container } from './styles'

function Header(){

    const navigate = useNavigate()

    return (
        <Container>
            <button onClick={() => navigate('/') }>Teste 1</button>
            <button onClick={() => navigate('/test2') }>Teste 2</button>
            <button onClick={() => navigate('/test3') }>Teste 3</button>
            <button onClick={() => navigate('/test4') }>Teste 4</button>
        </Container>
    )
}

export default Header