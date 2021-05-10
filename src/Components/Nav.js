import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Toolbar from "@material-ui/core/Toolbar";
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import CodeIcon from '@material-ui/icons/Code';
import GitHubIcon from '@material-ui/icons/GitHub';
import ContactMailIcon from '@material-ui/icons/ContactMail';




// grid
import Grid from '@material-ui/core/Grid';
// import HomeIco
import Home from "./Home";  
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";


const gridStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));

const useStyles = makeStyles({
  root: {
    width:"100%",
    position:"fixed",
    bottom:0,
    margin:0,
    overflow:"hidden",

  },
 
});

const Nav=()=> {
  const classes = useStyles();
  const[page,setPage]=useState(<Home/>);
  const grid=gridStyles();

  const [value, setValue] = React.useState('recents');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={grid.root}>
      <Grid container spacing={0}>
      <Grid item xs={12}>
        <div>{page}</div>
        </Grid>
        <Grid xs={12}>
      <div>
      <Toolbar>
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Home" value="Home" style={{color:"#195190FF"}}icon={<HomeIcon/>} onClick={()=>setPage(<Home/>)} />
      <BottomNavigationAction label="Info" value="Info" style={{color:"#195190FF"}}icon={<InfoIcon/>} onClick={()=>setPage(<About/>)} />
      <BottomNavigationAction label="Skills" value="Skills"style={{color:"#195190FF"}} icon={<CodeIcon/>} onClick={()=>setPage(<Skills/>)} />
      <BottomNavigationAction label="Projects" value="Projects" style={{color:"#195190FF"}}icon={<GitHubIcon/>} onClick={()=>setPage(<Projects/>)} />
      <BottomNavigationAction label="Contact Me" value="Contact Me"style={{color:"#195190FF"}} icon={<ContactMailIcon/>} onClick={()=>setPage(<Contact/>)} />
      </BottomNavigation>
      </Toolbar>
      </div>  
    </Grid>
    </Grid>
    </div>
  );
}
export default Nav;
