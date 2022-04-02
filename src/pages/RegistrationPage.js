import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuAppBar from '../component/AppBar';
import Registration from '../component/Registration';
import {Container, ContainerForm, LoaderContainer, override} from '../styles/_styles';
import { saveUserData } from '../actions';
import PuffLoader from "react-spinners/PuffLoader";
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router';

function RegistrationPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [isFetching, setIsFetching] = useState(false);
  const users = useSelector((state) => state.userData);
  
  const submitForm = data => {
    const email = data.email
    const password = data.password

    setIsFetching(true);

    setTimeout(() => {
      if(!users.find(user => user.email === data.email)) {
        navigate('/')
        dispatch(saveUserData({email, password}));
        enqueueSnackbar('Успешная регистрация', {
          variant: 'success'
        });
      } else {
        enqueueSnackbar('Неудачно', {
          variant: 'error'
        });
      }
      setIsFetching(false);
      }, 2000);
  }

  return (
    <Container>
        <MenuAppBar />
        <ContainerForm>
          {isFetching
          ? 
          (<LoaderContainer>
            <Registration onSubmit={submitForm}/>
                <PuffLoader 
                color={'#354461'} 
                loading={isFetching} 
                size={100} 
                css={override}
                />
          </LoaderContainer>)
          : <Registration onSubmit={submitForm}/>
          }
        </ContainerForm>
    </Container>
  );
}

export default RegistrationPage;
