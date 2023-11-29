
import * as React from 'react';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { AppBar, Toolbar, Typography, Grid, Card, CardContent, Button } from 
'@mui/material';
import { CenterFocusStrong } from '@mui/icons-material';
function MyForm() {
 const contacts = [
 
 { name: 'Jane Doe', email: 'janedoe@example.com' },
 // Add more contacts here
 ];
 const GenderInputSelect = (props) =>
  <select {...props}>
    <option>Select gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
 return (
 <div>
 <AppBar position="static">
 
 </AppBar>
 <Grid container spacing={2} style={{ padding: 20 }}>
 {contacts.map((contact, index) => (
 <Grid item xs={12} sm={6} md={4} key={index}>
 <Card className='c' style={{  height: '100%',  width: '200%'}}>
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
      type="text"
      label="Required"
      defaultValue="Health Issue"/><br></br>
      <TextField required
      id="outlined-require"
      label="Required"
    
      type="number" size="10"
      defaultValue="Contact"/>
      <TextField required
     
      label="Required"
      defaultValue="Gender"/>
      
        
      
    
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