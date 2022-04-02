import React from "react";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { reduxForm , Field } from "redux-form";
import {renderTextField, validate, maxValue, minValue } from "../forForm/validation"
import { InputContainer, LoginContainer, Title, TitleContainer } from "../styles/_styles";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { saveCurrentPage } from '../actions';

const Login = (props) => {
  const { handleSubmit, pristine, submitting, invalid } = props
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const theme = createTheme({
      palette: {
        neutral: {
          main: '#354461',
          contrastText: '#FFFFFF',
        },
      },
    })

  const clickChange = () => {
    navigate('/registration')
    dispatch(saveCurrentPage('Registration'))
  }

  return(
      <LoginContainer>
      <h1>LogIn:</h1>
        <form onSubmit={handleSubmit}>
          <ThemeProvider theme={theme}>
            <InputContainer>
              <Field
                name="email"
                component={renderTextField}
                placeholder='Email'
                data-testid="email-first"
              />
            </InputContainer>
            <InputContainer>
              <Field
                name="password"
                component={renderTextField}
                placeholder='Password'
                validate={[maxValue, minValue]}
                data-testid="password-first"
              />
            </InputContainer>
            <Button 
                disabled={invalid || pristine || submitting}
                variant="contained"
                type="submit"
                color='neutral'
                sx={{ width: '90%', height: '61px', borderRadius: '40px', marginTop: '20px'}}
            >
              Войти
            </Button>
            <TitleContainer>
              <p>У вас нет аккаунта?</p>&nbsp;<Title onClick={clickChange}>Создать</Title>
            </TitleContainer>                
          </ThemeProvider>
        </form>
      </LoginContainer>
  )
}
  
export default reduxForm({
  form: 'login',
  validate,
})(Login);