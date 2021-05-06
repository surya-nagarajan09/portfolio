
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { ImArrowLeft2} from 'react-icons/im';
import Grid from "@material-ui/core/Grid"


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
    backgroundColor:"#00ABE1",
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
              <Card style={{backgroundColor:"#161F6D",color:"white"}}>
                <CardContent>
                  <Typography variant="h3">EDUCATION</Typography>
                </CardContent>
              </Card>
              </div>         
                </Grid>
       <div className={classes.dis} >
         {info.map((x)=>(
        <Card className={classes.root} >
          <CardContent>
            <Typography gutterBottom variant="h4" >{x.degree}</Typography>
            <Typography gutterBottom variant="h5" >{x.area}</Typography>
            <Typography gutterBottom variant="h5" >{x.time}</Typography>
            <Typography variant="body2" color="textPrimary" component="p" style={{color:"white"}}>{x.dis}</Typography>  
            <Typography gutterBottom variant="h5" ><ImArrowLeft2/></Typography>     
          </CardContent>  
      </Card>    
    ))}

    </div>
      </div>
  )

}

export default About;
/**   */