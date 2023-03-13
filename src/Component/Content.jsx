import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { v4 as uuidv4 } from 'uuid';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));



const Content=()=>{
const[name,setName]=useState('');
const[email,setEmail]=useState('');
const[phoneNumber,setPhoneNumber]=useState('');
const[place,setPlace]=useState('');
const[userDetails,setUserDetails]=useState([]);
const[status,setStatus]=useState('add');
const[id,setId]=useState('');

const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false==true);

 
const Submit=()=>{
  
  

if(  name,email,phoneNumber,place){
if(status === "add"){
  let details={
    id:uuidv4(),
    name,email,phoneNumber,place
   }
 setUserDetails([...userDetails,details])
}else if(status === "edit"){
  let editedDetailsUpdate = userDetails.filter(item=>item.id !=id)
  let editedDetails ={
    name,email,phoneNumber,place
  } 
  setUserDetails([...editedDetailsUpdate,editedDetails])
}
   setName("")
   setEmail("")
   setPhoneNumber("")
   setPlace("")
   setStatus("add")
   setOpen("edit")
}else{
  alert("Please enter all values")
}
}

const deleteDetail =(id)=>{
let userDeletesUpdate = userDetails.filter(item=>item.id !=id)
setUserDetails(userDeletesUpdate)
}

const editDetail =(id)=>{
   console.log(id);
  let editUpdateDetail = userDetails.filter(item=>item.id ==id)

  setName(editUpdateDetail[0].name)
  setEmail(editUpdateDetail[0].email)
  setPhoneNumber(editUpdateDetail[0].phoneNumber)
  setPlace(editUpdateDetail[0].place)
  setId(editUpdateDetail[0].id)
  setStatus("edit")
  setOpen(editUpdateDetail[0].id)
  }

console.log(userDetails);
    return(
       <>
      <Box>
        <div>
        <Toolbar/> 
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
           <Box style={{display:'flex',justifyContent:'center'}}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 628,
          height: 250,
        },
      }}
    >
     
      <Paper elevation={3} style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center' }}>
  <br/>
        <div>
      <TextField 
      label="Name"
       variant="outlined"
       value={name}
       onChange={(e)=>setName(e.target.value)} />

      <TextField 
      style={{marginLeft:'50px'}} 
      label="Phone Number" 
      variant="outlined"
      value={phoneNumber}
      onChange={(e)=>setPhoneNumber(e.target.value)}/>
      </div>

      <div>
      <TextField 
       label="Email"
        variant="outlined"
        value={email}
        onChange={(e)=>setEmail(e.target.value)} />

      <TextField 
      style={{marginLeft:'50px'}}
        label="Place"
        variant="outlined" 
        value={place}
        onChange={(e)=>setPlace(e.target.value)}/>
      </div>

      <div>
      <Button 
      variant="contained"
      onClick={Submit}
      >Save
      </Button>
      </div>
      </Paper>
    </Box>
    </Modal>
  

    <Container maxWidth="md">
    <Button
        sx={{float:'right'}}
         variant="contained"
        onClick={handleOpen}
        >Add</Button>
        <br/>
        <br/>
    <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 700 }}>
      <TableHead>
        <TableRow>
    <StyledTableCell align="right">Name</StyledTableCell>
    <StyledTableCell align="right">Email</StyledTableCell>
    <StyledTableCell align="right">PhoneNumber</StyledTableCell>
    <StyledTableCell align="right">Place</StyledTableCell>
    <StyledTableCell align="right">Edit</StyledTableCell>
    <StyledTableCell align="right">Delete</StyledTableCell>
    </TableRow>
      </TableHead>
      {
        userDetails.length> 0 ? userDetails.map(eachDetails=>{
          return(
            <TableBody>
          <TableRow>
            <StyledTableCell align="right">{eachDetails.name}</StyledTableCell>
              <StyledTableCell align="right">{eachDetails.email}</StyledTableCell>
                <StyledTableCell align="right">{eachDetails.phoneNumber}</StyledTableCell>
                  <StyledTableCell align="right">{eachDetails.place}</StyledTableCell>
                  <StyledTableCell align="right"><button onClick={()=>editDetail(eachDetails.id)}>Edit</button> </StyledTableCell>
                  <StyledTableCell align="right"><button onClick={()=>deleteDetail(eachDetails.id)}>Delete</button> </StyledTableCell>
          </TableRow>
          </TableBody>
          )
        }):<span>No data are present</span>

      }
    </Table>
    </TableContainer>
    </Container>
  </div>
  </Box>
   </>    
    )

}
export default Content;