import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AppBar, Grid, Card, CardContent, Button } from '@mui/material';

function handleClick (){
  alert('Submitted Successfully!!!');
}
function Appointment() {
  const contacts = [
    { name: 'Jane Doe', email: 'janedoe@example.com' },
    // Add more contacts here
  ];

  return (
    <div>
      <AppBar position="static"></AppBar>
      <Grid container spacing={2} style={{ padding: 20 }}>
        {contacts.map((contact, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="c" style={{ height: '100%', width: '200%' }} id="doc">
              <CardContent>
                <h2 className="v">Doctor FORM</h2>
                <div>
                  <div className="b"></div>
                  <div className="a">
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        required
                        id="outlined-required-firstname"
                        type="text"
                        label="Required"
                        defaultValue="First Name"
                      />
                      <TextField
                        required
                        id="outlined-require-lastname"
                        type="text"
                        label="Required"
                        defaultValue="Last Name"
                      />
                      <br></br>
                      <TextField
                        required
                        id="outlined-require-email"
                        type="email"
                        label="Required"
                        defaultValue="Email"
                      />
                      <TextField
                        required
                        id="outlined-require-password"
                        label="Required"
                        defaultValue="Password"
                      />
                      <br></br>
                    
                      <TextField
                        required
                        id="outlined-require-age"
                       
                        label="requird"
                        defaultValue="WorkingTime start"
                      />
                      <TextField
                        required
                        id="outlined-require-age"
                       
                        label="required"
                        defaultValue="WorkingTime end"
                      /><br></br>
                      <TextField
                        required
                        id="outlined-require-age"
                        type="number"
                        label="Age"
                        defaultValue="Age"
                      />
                      <TextField required
                      id="outlined-require"
                      label="Phone Number"
                      
                      size="10"
                      defaultValue="+91"/>
                      <br></br>
                     
                      <label for="disease">Specialist:</label><br></br>
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
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: 10 }}
                  onClick={handleClick}
                >
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