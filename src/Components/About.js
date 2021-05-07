
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid"
import { Frame, Page } from "framer";
import CardActions from "@material-ui/core/CardActions"


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
const useStyles = makeStyles({
  root: {
    maxWidth:400,
    borderRadius:"3%",
    marginTop:"30px",
    marginRight:"15px",
    backgroundColor:"#195190FF",
    color:"white"
  },
  media: {
    height:200,
  },
  dis:{
      display:"flex",
      flexWrap:"wrap",
      color:"white",
      justifyContent:"center",
  }
});

const About=()=>{
  const classes = useStyles();
  return(
      <div >  
            <Grid xs={12} >
                <div  style={{diplay:"flex",justifyContent:"center",textAlign:"center"}}   >
              <Card style={{backgroundColor:"#195190FF",color:"#A2A2A1FF"}}>
                <CardContent>
                  <Typography variant="h3">EDUCATION</Typography>
                </CardContent>
              </Card>
              </div>         
            </Grid>
            <Grid xs={12}>
              <div style={{display:"flex",justifyContent:"center"}}>
            <Page width={400} height={500} radius={0}>
            <Frame size={150} radius={0} background={"white"} >
            <div >   
             <Card className={classes.root} >
                  <CardContent>
                  <Typography gutterBottom variant="h4" >{info[0].degree}</Typography>
                     <Typography gutterBottom variant="h5" >{info[0].area}</Typography>
                   <Typography gutterBottom variant="h5" >{info[0].time}</Typography>
                  <Typography variant="body2" color="textPrimary" component="p" style={{color:"white"}}>{info[0].dis}</Typography>  
                   
                 </CardContent>  
                 <CardActions>
                   <img src="https://i.postimg.cc/KY9JcDhg/swipe-left.png" alt="swipe Left" style={{width:"40px"}}></img>
                   <Typography>Swipe Left</Typography>
                 </CardActions>
            </Card>    
          </div>
            </Frame>
            <Frame size={150} radius={0} background={"#fff"} >
            <div >   
             <Card className={classes.root} >
                  <CardContent>
                  <Typography gutterBottom variant="h4" >{info[1].degree}</Typography>
                     <Typography gutterBottom variant="h5" >{info[1].area}</Typography>
                   <Typography gutterBottom variant="h5" >{info[1].time}</Typography>
                  <Typography variant="body2" color="textPrimary" component="p" style={{color:"white"}}>{info[1].dis}</Typography>   
                 </CardContent>  
                 <CardActions>
                   <img src="https://i.postimg.cc/KY9JcDhg/swipe-left.png" alt="swipe Left" style={{width:"40px"}}></img>
                   <Typography>Swipe Left</Typography>
                 </CardActions>
            </Card>    
          </div>
            </Frame>
            <Frame size={150} radius={0} background={"#fff"} >
            <div >   
             <Card className={classes.root} >
                  <CardContent>
                  <Typography gutterBottom variant="h4" >{info[2].degree}</Typography>
                     <Typography gutterBottom variant="h5" >{info[2].area}</Typography>
                   <Typography gutterBottom variant="h5" >{info[2].time}</Typography>
                  <Typography variant="body2" color="textPrimary" component="p" style={{color:"white"}}>{info[2].dis}</Typography>  
                   
                 </CardContent>  
                 <CardActions>
                   <img src="https://i.postimg.cc/KY9JcDhg/swipe-left.png" alt="swipe Left" style={{width:"40px"}}></img>
                   <Typography>Swipe Left</Typography>
                 </CardActions>
            </Card>    
          </div>
            </Frame>  
              </Page>
              </div>
           
         </Grid>
     </div>
  )

}

export default About;
/**   */