import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography"
import LinearProgress from '@material-ui/core/LinearProgress';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

const cardStyles = makeStyles({
    root: {
        maxWidth:"400px",
        justifyContent: 'center',
        textAlign: 'center',
        margin:"15px",
        backgroundColor:"#A2A2A1FF"
    }
  });

const useStyles = makeStyles((theme) => ({
  root: {
     width:"100%",
     height:"10",
     backgroundColor:"#A2A2A1FF"
  }
}));
const gridStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      color:"#A2A2A1FF",
      textColor:"#195190FF",
    },
  }));


const Skills=()=> {
  const classes = useStyles();
  const card=cardStyles();
  const grid=gridStyles();
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);
  const [progress4, setProgress4] = useState(0);
  const [progress5, setProgress5] = useState(0);
  const [progress6, setProgress6] = useState(0);
  useEffect(()=>{
    setProgress1(80)
    setProgress2(70)
    setProgress3(80)
    setProgress4(70)
    setProgress5(65)
    setProgress6(75)
  },[]);   

  return (
      <div className={grid.root}>
          <Grid container spacing={0}>
            <Grid xs={12}>
              <div  style={{diplay:"flex",justifyContent:"center",textAlign:"center"}}   >
              <Card style={{backgroundColor:"#195190FF",color:"#A2A2A1FF"}}>
                <CardContent>
                  <Typography variant="h2">SKILLS</Typography>
                </CardContent>
              </Card>
              </div>
            </Grid>
              <Grid xs={3}>
              </Grid>
               <Grid item xs={12} sm={3} >
             <Card className={card.root} variant="outlined">
             <CardContent>
                <div className={classes.root}>
                   <Typography variant="h5"style={{backgroundColor:"#A2A2A1FF",color:"#195190FF"}} >HTML- 80%</Typography>
                    <LinearProgress  variant="determinate" color="primary" value={progress1}></LinearProgress> 
                </div>
             </CardContent>
            </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
              <Card className={card.root} variant="outlined">
             <CardContent>
                <div className={classes.root}>
                   <Typography variant="h5" style={{backgroundColor:"#A2A2A1FF",color:"#195190FF"}}>CSS- 70%</Typography>
                    <LinearProgress color="primary" variant="determinate" value={progress2}></LinearProgress> 
                </div>
             </CardContent>
            </Card>
              </Grid>
              <Grid xs={3}>
              </Grid>
               <Grid item xs={12} sm={3} >
             <Card className={card.root} variant="outlined">
             <CardContent>
                <div className={classes.root}>
                   <Typography variant="h5" style={{backgroundColor:"#A2A2A1FF",color:"#195190FF"}}>Java Script-80%</Typography>
                    <LinearProgress color="primary" variant="determinate" value={progress3}></LinearProgress> 
                </div>
             </CardContent>
            </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
              <Card className={card.root} variant="outlined">
             <CardContent>
                <div className={classes.root}>
                   <Typography  variant="h5" style={{backgroundColor:"#A2A2A1FF",color:"#195190FF"}}>React Js -70%</Typography>
                    <LinearProgress color="primary"  variant="determinate" value={progress4}></LinearProgress> 
                </div>
             </CardContent>
            </Card>
              </Grid>
              <Grid xs={3}>
              </Grid>
               <Grid item xs={12} sm={3} >
             <Card className={card.root} variant="outlined">
             <CardContent>
                <div className={classes.root}>
                   <Typography variant="h5" style={{backgroundColor:"#A2A2A1FF",color:"#195190FF"}}>Node JS -65%</Typography>
                    <LinearProgress color="primary"  variant="determinate" value={progress5}></LinearProgress> 
                </div>
             </CardContent>
            </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
              <Card className={card.root} variant="outlined">
             <CardContent>
                <div className={classes.root}>
                   <Typography variant="h5" style={{backgroundColor:"#A2A2A1FF",color:"#195190FF"}}>MongoDb -80%</Typography>
                    <LinearProgress color="primary" variant="determinate" value={progress6}></LinearProgress> 
                </div>
             </CardContent>
            </Card>
              </Grid>
        </Grid>
      </div>
    
  );
}


export default Skills;
