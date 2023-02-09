import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { EventRounded } from '@mui/icons-material';

const formData = {
  email: 'manuel@mail.com',
  password: '123456',
  displayName: 'Manuel Sarria'
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'the email must have an @' ],
  password: [ (value) => value.length >= 6, 'the password must be more than u charateres length' ],
  displayName: [ (value) => value.length >= 1, 'the name is required' ],
}

export const RegisterPage = () => {

  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm( formData, formValidations );

  console.log(first)

  const onSubmit = ( event ) => {
    EventRounded.preventDefault();
    console.log(formState);
  }

  return (
    <AuthLayout title='sign up'>
      <form onSubmit={ onSubmit }>
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
              error={ !displayNameValid }
              helperText={'the name is required'}
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
            />
          </Grid>

          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={ 12 }>
              <Button variant="contained" fullWidth type='submit'>
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
