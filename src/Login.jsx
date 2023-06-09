import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';


 const Login=()=>{
    
  const navigate= useNavigate();
  function handleClick (){
    navigate('/Parent')
  
  }  
     
    
    return(
      <div>
        <form> 
         <Box display='flex'
          flexDirection={"column"}
          maxWidth={400}
          alignItems={'center'}
          justifyContent={'center'}
          margin={'auto'}
          marginTop={5}
          padding={3}
        
          borderRadius={5}
          boxShadow={'5px 5px 10px #ccc'}
          sx={{
            
          
              ":hover":{
                boxShadow:'10px 10px 20px #ccc'
              }
          }}
          >
            <Typography variant='h2' padding={3} alignItems={'center'}>Login</Typography>
            <TextField margin='normal' type={'text'} variant='outlined' placeholder=' Name'/>
            <TextField margin='normal'type={'email'}variant='outlined'placeholder='Email'/>
            <TextField margin='normal' type={'password'} variant='outlined'placeholder='Password'/>
            
            <Button 
           onClick={handleClick}
            sx={{marginTop:3}} 
            variant='contained'
             color='warning'>
              Login
             </Button>
         </Box>
        </form>
    </div>
    )
}
export default Login;