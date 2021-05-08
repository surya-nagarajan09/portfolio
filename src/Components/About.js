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
  },
}));
const About=()=>{
  const classes = useStyles();
  return(
    <div>
      <Grid container spacing={1}>
      <Grid item xs={12}>
      <div  style={{diplay:"flex",justifyContent:"center",textAlign:"center"}}   >
                 <Card style={{backgroundColor:"#195190FF",color:"#A2A2A1FF"}}>
                <CardContent>
                  <Typography variant="h3">ABOUT</Typography>
                </CardContent>
               </Card>
                 </div>
        </Grid> 
      <Grid  container direction="column" justify="center"  alignItems="center">
        <Grid item xs={12} sm={6}>
          <motion.div whileHover={{ scale:1.1}} >
            <Card className={classes.root} style={{backgroundColor:'#195190FF',color:"white",marginTop:"2px"}} >
                  <CardContent>
                 <Typography gutterBottom variant="h4" >{info[0].degree}</Typography>
                   <Typography gutterBottom variant="h5" >{info[0].area}</Typography>
                   <Typography gutterBottom variant="h5" >{info[0].time}</Typography>
                   <Typography variant="body2" color="textPrimary" component="p" style={{color:"white"}}>{info[0].dis}</Typography>   
                  </CardContent>      
             </Card>
             </motion.div>    
        </Grid>
        <Grid item xs={12} sm={6}>
          <motion.div whileHover={{ scale:1.1}} >
            <Card className={classes.root} style={{backgroundColor:'#195190FF',color:"white",marginTop:"2px"}} >
                  <CardContent>
                 <Typography gutterBottom variant="h4" >{info[1].degree}</Typography>
                   <Typography gutterBottom variant="h5" >{info[1].area}</Typography>
                   <Typography gutterBottom variant="h5" >{info[1].time}</Typography>
                   <Typography variant="body2" color="textPrimary" component="p" style={{color:"white"}}>{info[1].dis}</Typography>   
                  </CardContent>      
             </Card>
             </motion.div>    
        </Grid>
        <Grid item xs={12} sm={6}>
          <motion.div whileHover={{ scale:1.1}} >
            <Card className={classes.root} style={{backgroundColor:'#195190FF',color:"white",marginTop:"2px"}} >
                  <CardContent>
                 <Typography gutterBottom variant="h4" >{info[2].degree}</Typography>
                   <Typography gutterBottom variant="h5" >{info[2].area}</Typography>
                   <Typography gutterBottom variant="h5" >{info[2].time}</Typography>
                   <Typography variant="body2" color="textPrimary" component="p" style={{color:"white"}}>{info[2].dis}</Typography>   
                  </CardContent>      
             </Card>
             </motion.div>    
        </Grid> 
        <Grid item xs={12} sm={6}>
        </Grid>
      </Grid>
      </Grid>

    </div>
      
  )

}

export default About;
