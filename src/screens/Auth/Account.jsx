import { Button } from '@mui/material';
import React, { useContext } from 'react'
import Navbar from '../../components/Navbar'
import { AuthContext } from '../../context/AuthController';
import {Container, ContainerUser} from './styledAuth';
const Account = () => {

  const auth = useContext(AuthContext);
  const user = auth.user;
  const closeSession = () => {
    auth.logout();
    window.localStorage.clear();
  }
  return (
    <div>
        <Navbar cartDirect={true}></Navbar>
        <Container > 
          <ContainerUser>
             <p>{user.email}</p>
             <p>Creación de la cuenta: {user.metadata.creationTime}</p>
             <p>Ultimo inicio de sesión: {user.metadata.lastSignInTime}</p>
             <Button onClick={() => closeSession()}>Cerrar Sesión</Button>
          </ContainerUser>
          
        </Container>
    </div>
  )
}

export default Account