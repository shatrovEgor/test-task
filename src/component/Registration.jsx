import React from "react";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { reduxForm , Field } from "redux-form";
import {renderTextField, validate } from "../forForm/validation"
import { maxValue, minValue } from "../forForm/validation";
import { LoginContainer, InputContainer } from "../styles/_styles";

const Registration = (props) => {
    const { handleSubmit, pristine, submitting, invalid } = props

    const theme = createTheme({
        palette: {
          neutral: {
            main: '#354461',
            contrastText: '#FFFFFF',
          },
        },
      })

    return(
        <LoginContainer>
        <h1>Sing Up</h1>
            <form onSubmit={handleSubmit} >
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
                    <InputContainer>
                        <Field
                            name="passwordRep"
                            component={renderTextField}
                            placeholder='Repeat password'
                            data-testid="password-first"
                        />
                    </InputContainer>
                        <Button 
                            disabled={invalid || pristine || submitting}
                            variant="contained"
                            type="submit"
                            color='neutral'
                            sx={{ width: '80%', height: '61px', borderRadius: '40px', marginTop: '20px'}}
                        >зарегистрироваться</Button>             
                </ThemeProvider>
            </form>
        </LoginContainer>
            
    )
}

export default reduxForm({
    form: 'registration',
    validate,
})(Registration);