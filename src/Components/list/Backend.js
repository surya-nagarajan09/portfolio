import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {DiNodejs } from "react-icons/di";  
import {FaGithubAlt } from "react-icons/fa";
import { AwesomeButton } from "react-awesome-button";
import { motion } from "framer-motion";
const projects= [
    {
      name: "Folder And File Reader From Local File",
      languages: "Node Js",
      img: "",
      front:
        "https://github.com/surya-nagrajan/folders-and-files-from-your-local-drive-",
      back: ""
    },
    {
      name: "Mentor And Student Assign",
      languages: "Node Js",
      img: "",
      front: "https://github.com/surya-nagrajan/Mentor-and-Student-Assigning",
      back: ""
    },
    {
      name: "Mentor And Student Assign With DataBase",
      languages: "Node Js,Database:MongoDB",
      img: "",
      front:
        "https://github.com/surya-nagrajan/Assigning-Mentor-and-Students-with-Database",
      back: ""
    }
  ];
const useStyles = makeStyles({
    root: {
      maxWidth:300,
      borderRadius:"3%",
      margin:"10px",
      backgroundColor:"#195190FF",
      color:"white"
    },
    media: {
      height: 200,
    },
    dis:{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
    }
  });

const Jshtml=()=>{
    const classes = useStyles();
    return(
      <div >
  
       <div className={classes.dis} >{projects.map((x)=>(
           <motion.div whileHover={{ scale:1.1}} >
              <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={x.img}title="Contemplative Reptile"/>
            <CardContent>
              <Typography gutterBottom variant="h5" >{x.name}</Typography>
              <Typography variant="body2" color="textPrimary" component="p">{x.about}</Typography>
              <Typography style={{margin:"5px",padding:"5px",border:"5px",borderColor:"blue"}}variant="h3"><DiNodejs/></Typography>  
            </CardContent>
          </CardActionArea>
          <CardActions>
          <AwesomeButton size="large" type="primary" href={x.front} target="_blank"><Typography variant="h5" ><FaGithubAlt/></Typography></AwesomeButton> 
          {/* <AwesomeButton size="large" type="primary" href={x.dep} target="_blank"><Typography variant="h5" ><GrDeploy/></Typography></AwesomeButton> */}
          </CardActions>
        </Card>

           </motion.div>
             
      ))}

      </div>
      

        </div>
    )

}

export default Jshtml;