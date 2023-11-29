
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AppBar, Toolbar, Typography, Grid, Card, CardContent, Button } from 
'@mui/material';
import { CenterFocusStrong } from '@mui/icons-material';
function Appointment() {
 const contacts = [
 
 { name: 'Jane Doe', email: 'janedoe@example.com' },
 // Add more contacts here
 ];
 return (
 <div>
 <AppBar position="static">
 
 </AppBar>
 <Grid container spacing={2} style={{ padding: 20 }}>
 {contacts.map((contact, index) => (
 <Grid item xs={12} sm={6} md={4} key={index}>
 <Card className='c' style={{  height: '100%',  width: '200%'}}>
 <CardContent>
 <h2 className='v'>Doctor FORM</h2>
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
      type="number"
      label="Age"
      defaultValue="Age"/>
      <TextField required
      id="outlined-require"
      type="text"
      label="Required"
      defaultValue="Specialist"/>
      
        
      
    
    </Box>
   
    
   
    </div>
   
    </div>
    
 <Button variant="contained" color="primary" style={{ marginTop: 10 }}>
 SUBMIT
 </Button>
 </CardContent>
 </Card>
 </Grid>
 ))}
 </Grid>
 </div>
 );
}
export default Appointment;
