import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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

export default function Modal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
        </Box>
      </Modal>
    </div>
  );
}