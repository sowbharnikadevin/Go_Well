import * as React from 'react';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Icon from '@mui/material/Icon';
import MdPhone from '@mui/icons-material/Phone';
import Chip from '@mui/material/Chip';
import "./dermotology.css";
const theme = createTheme();
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Cardio() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  function handleClick (){
    alert('Appointment has been booked successfully!!!');
  }

  return (
    <div className='mn'>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            M
          </Avatar>
        }
       
        title="Dr.Maheshwari"
        subheader="December 01, 2023"
      />
      <CardMedia
        component="img"
        height="350"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7XF7zEI3h3oZOAl1cPsmyT41vzC-e-N3I3mMnycNK2sokr0n0fvOvOhg-5_orEaPFjlA&usqp=CAU"
        alt="Dr."
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          AVAILABLE TIME: 10AM - 12PM<br></br>
          DAYS:MON-FRI<br></br><hr></hr>
          <div><img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/award.svg" class="pe-2" ></img> <span class="mb-0 me-2 dp-col2 textline1 fs013">&nbsp;&nbsp;&nbsp;<prev>  3 years experience overall</prev> </span></div><br></br>
          <ThemeProvider theme={theme}>
            <Chip icon={<MdPhone />}  />    <prev>9876543267</prev>
          </ThemeProvider>
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton  aria-label="add to favorites">
      <FavoriteIcon  className='qq'/>
    </IconButton><pre>     <button onClick={handleClick} className='pink'>BOOK AN APPOINTMENT </button></pre>
    
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography ><b>DOCTOR BIO:</b></Typography>
          <Typography paragraph>
        <b> DEGREE:</b>  Bachelor of Science in Dermatology.
          </Typography>
          
          <Typography >
         <b>Healthy diet:</b>
          </Typography>
          <Typography paragraph>
 Control your portion size. ...
Eat more vegetables and fruits. ...
Select whole grains. ...
Limit unhealthy fats. ...
Choose low-fat protein sources. ...
Limit or reduce salt (sodium) ...
Plan ahead: Create daily menus. ...
Allow yourself an occasional treat.
          </Typography>
         
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
}
