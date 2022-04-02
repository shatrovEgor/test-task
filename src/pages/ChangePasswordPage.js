import React,{useState} from 'react';
import MenuAppBar from '../component/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import ChangePassword from '../component/ChangePassword';
import PuffLoader from "react-spinners/PuffLoader";
import { useSnackbar } from 'notistack';
import {Container, ContainerForm, LoaderContainer, override} from '../styles/_styles';
import { updateUserPass } from '../actions';

function ChangePasswordPage() {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const [isFetching, setIsFetching] = useState(false);
  const userPass = useSelector((state) => state.auth.password)

  const submitForm = data => {
    setIsFetching(true);
    setTimeout(() => {
      if(userPass === data.oldPassword) {
        dispatch(updateUserPass(data))
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
        <ChangePassword onSubmit={submitForm}/>
            <PuffLoader 
            color={'#354461'} 
            loading={isFetching} 
            size={100} 
            css={override}
            />
      </LoaderContainer>)
      : <ChangePassword onSubmit={submitForm}/>
      }
    </ContainerForm>
</Container>
  );
}

export default ChangePasswordPage;
