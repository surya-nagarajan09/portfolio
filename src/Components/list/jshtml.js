import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { DiHtml5,DiCss3 } from "react-icons/di";  
import { IoLogoJavascript } from "react-icons/io";
import {FaGithubAlt } from "react-icons/fa";
import {GrDeploy} from "react-icons/gr";
import { AwesomeButton } from "react-awesome-button";

const projects= [
  {
    name: "Github Clone",
    languages: "HTML,CSS,JS",
    img: "https://i.ibb.co/x8gtBzw/3.jpg",
    git: "https://agitated-bartik-fb2d64.netlify.app/",
    dep: "https://github.com/surya-nagrajan/Github_clone",
    about:"A clone of git is done ,here you can search for repos and link"
  },
  {
    name: "Currency Converter",
    languages: "HTML,CSS,JS",
    img: "https://i.ibb.co/GpPk488/5.jpg",
    dep: "https://github.com/surya-nagrajan/currency-converter",
    git: "https://surya-nagrajan.github.io/currency-converter/",
    about:"built using api,here u can get daily currency value"
  },
  {
    name: "Series Searcher",
    languages: "HTML,CSS,JS",
    img: "https://i.ibb.co/23cRNvD/1.jpg",
    git: "https://xenodochial-leavitt-5e2346.netlify.app/",
    dep: "https://github.com/surya-nagrajan/series-searcher",
    about:"here you can search for any series,will display all info"

  },
  {
    name: "Pagination",
    used: "HTML,CSS,JS",
    img: "https://i.ibb.co/KKCk5H8/4.jpg",
    git: "https://surya-nagrajan.github.io/pagination/",
    dep: "https://github.com/surya-nagrajan/pagination",
    about:"list of data is paginated heredfsdfssfdsds"
  },
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
        color:"white"
    }
  });

const Jshtml=()=>{
    const classes = useStyles();
    return(
        <div >
         <div className={classes.dis} >{projects.map((x)=>(
          <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={x.img}title="project"/>
            <CardContent>
              <Typography gutterBottom variant="h5" >{x.name}</Typography>
              <Typography variant="body2" color="textPrimary" component="p" style={{color:"white"}}>{x.about}</Typography>
              <Typography style={{margin:"5px",padding:"5px",border:"5px",borderColor:"primary",color:"white"}} variant="h5"><DiHtml5/><DiCss3/><IoLogoJavascript/></Typography>  
            </CardContent>
          </CardActionArea>
          <CardActions>
          <AwesomeButton size="large" type="primary" href={x.dep} target="_blank"><Typography variant="h5" ><FaGithubAlt/></Typography></AwesomeButton> 
          <AwesomeButton size="large" type="primary" href={x.git} target="_blank"><Typography variant="h5" ><GrDeploy/></Typography></AwesomeButton>
          </CardActions>
        </Card>    
      ))}

      </div>
      

        </div>
    )

}

export default Jshtml;