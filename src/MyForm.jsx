import * as React from 'react';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { AppBar, Grid, Card, CardContent, Button } from 
'@mui/material';
import './MyForm.css'

function MyForm() {
 const contacts = [
 
 { name: 'Jane Doe', email: 'janedoe@example.com' },
 // Add more contacts here
 ];

 return (
 <div className='ji'>
 <AppBar position="static">
 
 </AppBar>
 <Grid container spacing={2} style={{ padding: 20 }}>
 {contacts.map((contact, index) => (
 <Grid item xs={12} sm={6} md={4} key={index}>
 <Card className='c'  id="doc">
 <CardContent>
 <h2 className='v'>REGISTRATION FORM</h2>
 <div>
    <div class="b">
    
    </div>
    <div class = "a">
   
   
    
    <Box
      component="form" 
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField  required
      id="outlined-required"
      type="text"
      label="Required"
      defaultValue="First Name" />
      <TextField  required
      id="outlined-require"
      type="text"
      label="Required"
      defaultValue="Last Name" /><br></br>
      <TextField required
      id="outlined-require"
      type="email"
      label="Required"
      defaultValue="Email"/>
      <TextField required
      id="outlined-require"
      label="Required"
      defaultValue="Password"/><br></br>
      <TextField required
      id="outlined-require"
      label="Required"
      defaultValue="Address"/>
      <TextField required
      id="outlined-require"
      type="number"
      label="Age"
      defaultValue="Age"/><br></br>
      <TextField required
      id="outlined-require"
      type="date"
      label=""
      defaultValue="BOD"/>
      <TextField required
      id="outlined-require"
      label="Phone Number"
      
      size="10"
      defaultValue="+91"/>
      <br></br>
      <TextField required
      
      label="Required"
      defaultValue="Gender"/>
      <TextField required
      
      label="Required"
      defaultValue="BloodGroup"/>
      <br></br>
      <label for="disease">Health Issue:</label><br></br>
      <select name="cars" >
      <option value="volvo">CARDIOLOGY</option>
      <option value="saab">DIABETES</option>
      <option value="mercedes">GYNAECOLOGY</option>
      <option value="audi">ENT</option>
      <option value="audi">DERMOTOLOGY</option>
      <option value="audi">CANCER</option></select>
      
      
      
      
      </Box>
   
    
   
    </div>
   
    </div>
    
 <Link to="/cont"><Button variant="contained" color="primary" style={{ marginTop: 10 }}>
 CONTINUE
 </Button></Link>
 </CardContent>
 </Card>
 </Grid>
 ))}
 </Grid>
 </div>
 );
}
export default MyForm;