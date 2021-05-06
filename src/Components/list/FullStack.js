import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { DiHtml5,DiReact,DiMongodb,DiNodejs,DiHeroku } from "react-icons/di"; 
import {GrDeploy} from "react-icons/gr";
import {FaGithubAlt } from "react-icons/fa";
import { AwesomeButton } from "react-awesome-button";

const projects=[{
    name:"E-Commerce App",
    about:" Here you can buy product ,add to cart and review ,only after one logged in can review the cart",
    git:"https://github.com/surya-nagrajan/commerce",
    dep:"https://react-commerceupdated.herokuapp.com/",
    used:"HTML,CSS,Js,React Js,Express JS,MongoDb,Material-ui",
    img:"https://i.postimg.cc/0yrx8b81/Capture-JPGdsfsdfsfds.jpg"
},
{
    name:"Ticket Booking App",
    about:" Here you can watch upcoming movie,select a movie, able to select your seat number",
    git:"https://github.com/surya-nagrajan/Ticket_Booking",
    dep:"https://moviebookingapplication.herokuapp.com/",
    used:"HTML,CSS,Js,React Js,Express JS,MongoDB,Material-ui",
    img:"https://i.postimg.cc/kGkZqXwq/sadasdasdsad.jpg"
},
{
    name:"Bike Service Booking App",
    about:" Here you can fill the form ,and get serive mail regarding service date and time",
    git:"https://github.com/surya-nagrajan/bike",
    dep:"https://bookmymech.herokuapp.com/",
    used:"HTML,CSS,Js,React Js,Express JS,MongoDb,Material-ui",
    img:"https://i.postimg.cc/mr85hSVd/Capture-JPGdsadasdsadd.jpg"
}
];


const useStyles = makeStyles({
    root: {
      maxWidth:350,
      borderRadius:"3%",
      margin:"5px",
   
    },
    media: {
      height:200,
    },
    dis:{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        color:"white",
    }
  });

const FullStack=()=>{
    const classes = useStyles();
    return(
        <div>  
         <div className={classes.dis} >{projects.map((x)=>(
          <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={x.img}  title="projects"/>
            <CardContent>
              <Typography gutterBottom variant="h5" >{x.name}</Typography>
              <Typography variant="body2" color="textPrimary" component="p" >{x.about}</Typography>
              <Typography style={{margin:"5px",padding:"5px",border:"5px",borderColor:"secondary"}}variant="h5"><DiHtml5/><DiReact/><DiNodejs/><DiMongodb/><DiHeroku/></Typography>  
            </CardContent>
          </CardActionArea>
          <CardActions>
          <AwesomeButton size="large" style={{backgroundColor:"#89ABE3FF"}} href={x.git} target="_blank"><Typography variant="h5" ><FaGithubAlt/></Typography></AwesomeButton> 
          <AwesomeButton size="large"  href={x.dep} target="_blank"><Typography variant="h5" ><GrDeploy/></Typography></AwesomeButton>
          </CardActions>

        </Card>    
      ))}

      </div>
        </div>
    )

}

export default FullStack;