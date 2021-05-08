import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid"
import { motion } from "framer-motion";



const info=[{
  degree:"Bachelor of Engineering in Mechanical",
  area:"IFET college of Engineering",
  time:"(2016-2020)",
  dis:"Completed graduation in Mechanical Engineering from IFET College of Engineering with overall CGPA 7.94"
},
{
  degree:"HSC",
  area:"Thiruvalluvar Matric Higher Secondary school",
  time:"(2016-2020)",
  dis:"Completed HSC  with 82%"
},
{
  degree:"SSC",
  area:"Thiruvalluvar Matric Higher Secondary school",
  time:"(2016-2020)",
  dis:"Completed HSC  with 92%"
}]
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display:"block",
    width:"100% ",
    justifyContent:'center',
  },
}));
const About=()=>{
  const classes = useStyles();
  return(
    <div>
      <Grid container spacing={1}>
      <Grid item xs={12}>
      <div  style={{diplay:"flex",justifyContent:"space-evenly",textAlign:"center"}}   >
                 <Card style={{backgroundColor:"#195190FF",color:"#A2A2A1FF"}}>
                <CardContent>
                  <Typography variant="h3">ABOUT</Typography>
                </CardContent>
               </Card>
                 </div>
        </Grid> 
      <Grid  container direction="row" justify="center" alignItems="baseline"> 
            <Grid item xs={12} >
          <motion.div whileHover={{ scale:1.01}}  whileTap={{ scale: 0.9 }}>
            <Card className={classes.root} style={{color:"#195190FF",marginTop:"2px"}} >
                  <CardContent>
                 <Typography gutterBottom variant="h4" >{info[0].degree}</Typography>
                   <Typography gutterBottom variant="h5" >{info[0].area}</Typography>
                   <Typography gutterBottom variant="h5" >{info[0].time}</Typography>
                   <Typography variant="body2" color="textPrimary" component="p" style={{color:"#195190FF"}}>{info[0].dis}</Typography>   
                  </CardContent>      
             </Card>
             </motion.div>    
        </Grid>
        <Grid item xs={12}  >
          <motion.div whileHover={{ scale:1.01}} whileTap={{ scale: 0.9 }} >
            <Card className={classes.root} style={{color:"#195190FF",marginTop:"2px"}} >
                  <CardContent>
                 <Typography gutterBottom variant="h4" >{info[1].degree}</Typography>
                   <Typography gutterBottom variant="h5" >{info[1].area}</Typography>
                   <Typography gutterBottom variant="h5" >{info[1].time}</Typography>
                   <Typography variant="body2" color="textPrimary" component="p" style={{color:"#195190FF"}}>{info[1].dis}</Typography>   
                  </CardContent>      
             </Card>
             </motion.div>    
        </Grid>
        <Grid item xs={12} >
          <motion.div whileHover={{ scale:1.01}}  whileTap={{ scale: 0.9 }}>
            <Card className={classes.root} style={{color:"#195190FF",marginTop:"2px"}} >
                  <CardContent>
                 <Typography gutterBottom variant="h4" >{info[2].degree}</Typography>
                   <Typography gutterBottom variant="h5" >{info[2].area}</Typography>
                   <Typography gutterBottom variant="h5" >{info[2].time}</Typography>
                   <Typography variant="body2" color="textPrimary" component="p" style={{color:"#195190FF"}}>{info[2].dis}</Typography>   
                  </CardContent>      
             </Card>
             </motion.div>    
        </Grid>
      </Grid>
      </Grid>

    </div>
      
  )

}

export default About;
