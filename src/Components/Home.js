import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { AiFillGithub } from 'react-icons/ai';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";


const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        width: '5px',
        height: '5px',
        borderRadius: '50%',
        animation: '$ripple 1s infinite ease-in-out',
        border: '3px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);
  


const gridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display:"flex",
    flexWrap:"wrap",
    color:"#161F6D",
  },
}));

export default function CenteredGrid() {
  const grid = gridStyles();


  return (
    <div className={grid.root}>
      <Grid container spacing={1}> 
         <Grid xs={2}>
        </Grid>  
        <Grid item xs={12} sm={6} md={3}> 
        <div>
      <StyledBadge  overlap="circle" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} variant="dot" >
        <Avatar style={{height: '250px',width:"250px",marginTop:"120px",marginLeft:"50px"}} alt="" src="https://i.postimg.cc/tCWDM9zY/IMG-20200727-WA0006.jpg" />
      </StyledBadge>    
    </div>     
        </Grid>
        <Grid item xs={12} sm={6} md={3}> 
        
         <div style={{marginTop:"120px",justifyContent:"center",display:"block",padding:"10px",border:"50px",marginLeft:"50px" }}> 
          <Typography variant="h2">Hi!</Typography>
        <Typography variant="h3">I am Surya N</Typography>
        <Typography variant="h4">MERN Stack Developer</Typography> 
        </div>       
      
        <div style={{display:'flex',justifyContent: 'center',width:'100%'}}>
        <Button href="https://www.guvi.in/suryanagarajan01" target="_blank"><Typography variant="h4"><img src="https://i.postimg.cc/RFX8GXmn/20210506-131238.png  " width="50" height="50"alt="guvi"></img></Typography></Button>   
        <Button href="https://github.com/surya-nagrajan" target="_blank"><Typography variant="h4"><AiFillGithub/></Typography></Button>   
        <AwesomeButton type="secondary" href="https://drive.google.com/file/d/1cwytyWV1zEu3g2AgO5ScuUC2gteXn5Sa/view?usp=sharing" target="_blank">Resume</AwesomeButton>
        </div>
        <div>
        </div>
        </Grid>
        <Grid xs={2}>
        </Grid> 
       
      </Grid>
    </div>
  );
}
