import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuAppBar from '../component/AppBar';
import Login from '../component/Login';
import {Container, ContainerForm, LoaderContainer, override} from '../styles/_styles';
import { logIn, saveCurrentPage } from '../actions';
import PuffLoader from "react-spinners/PuffLoader";
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router';

function LoginPage() {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const users = useSelector((state) => state.userData)
    const [isFetching, setIsFetching] = useState(false);
    const dispatch = useDispatch();

    const submitForm = data => {
        setIsFetching(true);
        setTimeout(() => {
            if(users.find(user => user.email === data.email && user.password === data.password)) {
              navigate('/change_pass')
              dispatch(logIn(data));
              dispatch(saveCurrentPage('Change password'))
              enqueueSnackbar('Успешно', {
                  variant: 'success'
              });
            } else {
              enqueueSnackbar('Неудачно', {
                  variant: 'error'
              });
            }
            setIsFetching(false);
        }, 2000)
    }

  return (
    <Container>
        <MenuAppBar />
        <ContainerForm>
            {isFetching 
                ? 
                    (<LoaderContainer>
                    <Login onSubmit={submitForm}/>
                        <PuffLoader 
                        color={'#354461'} 
                        loading={isFetching} 
                        size={100} 
                        css={override}
                        />
                    </LoaderContainer>) 
                :
                    <Login onSubmit={submitForm}/>
            }
        </ContainerForm>
    </Container>
  );
}

export default LoginPage;
