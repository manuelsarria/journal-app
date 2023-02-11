import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'the email must have an @' ],
  password: [ (value) => value.length >= 6, 'the password must be more than 6 charateres length' ],
  displayName: [ (value) => value.length >= 1, 'the name is required' ],
}

export const RegisterPage = () => {

  const dispath = useDispatch()

  const [formSubmited, setFormSubmited] = useState( false );

  const { status, errorMessage } = useSelector( state => state.auth )
  const isCheckingAuthentication = useMemo  (() => status === 'checking', [status])

  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm( formData, formValidations );

  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmited(true);

    if ( !isFormValid ) return;

    dispath( startCreatingUserWithEmailPassword( formState ) );
  }

  return (
    <AuthLayout title='sign up'>
      <h1>FormValid { isFormValid ? 'Valido' : 'Incorrect' }</h1>
      <form onSubmit={ onSubmit } className='animate__animated animated__fadeIn animate__faster'>
        <Grid container> 
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label="Complete name"
              type="text" 
              placeholder="FistName Lastname"
              fullWidth
              name='displayName'
              value={ displayName }
              onChange={ onInputChange }
              error={ !!displayNameValid && formSubmited }
              helperText={ displayNameValid }
            />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label="mail"
              type="email" 
              placeholder="correo@google.com"
              fullWidth
              name='email'
              value={ email }
              onChange={ onInputChange }
              error={ !!emailValid && formSubmited }
              helperText={ emailValid }
            />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label="password"
              type="password" 
              placeholder="******"
              fullWidth
              name='password'
              value={ password }
              onChange={ onInputChange }
              error={ !!passwordValid && formSubmited }
              helperText={ passwordValid }
            />
          </Grid>

          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

            <Grid item xs={ 12 } display={ !!errorMessage ? '' : 'none'}>
              <Alert severity='error'>
                {errorMessage}
              </Alert>
            </Grid>

            <Grid item xs={ 12 }>
              <Button disabled={isCheckingAuthentication} variant="contained" fullWidth type='submit'>
               sign up
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1}}>you already have an account ?</Typography>
            <Link component={ RouterLink } color="inherit" to="/auth/login">
              Log in
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>

  )
}
