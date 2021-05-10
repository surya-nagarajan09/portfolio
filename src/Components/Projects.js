import React,{useState} from "react";
import FullStack from "./list/FullStack";
import Jshtml from "./list/jshtml";
import Backend from "./list/Backend";
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent";
import ReactiveButton from 'reactive-button';
import { FaHammer } from 'react-icons/fa';
import { DiCodeBadge } from 'react-icons/di';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,

    },
  }));

const Projets=()=>{
    const[project,setProject]=useState(<FullStack/>);
    const grid=useStyles;
    const [state, setState] = useState('idle');
    const [state1, setState1] = useState('idle');
    const [state2, setState2] = useState('idle');

    const onClickHandlerFull = () => {
       setState('loading');
       setTimeout(() => {
          setState('success');
          setProject(<FullStack/>)
       },600);
    }
    const onClickHandlerjs = () => {
      setState1('loading');
      setTimeout(() => {
         setState1('success');
         setProject(<Jshtml/>)
      },600);
   }
   const onClickHandlernode = () => {
    setState2('loading');
    setTimeout(() => {
       setState2('success');
       setProject(<Backend/>)
    },600);
 }
 
    return(
        <div className={grid.root}>
            <Grid container spacing={1}>
               <Grid xs={12} >
                <div  style={{diplay:"flex",justifyContent:"center",textAlign:"center"}}   >
                 <Card style={{backgroundColor:"#195190FF",color:"#A2A2A1FF"}}>
                <CardContent>
                  <Typography variant="h3">PROJECTS </Typography>
                </CardContent>
               </Card>
                 </div>         
                </Grid>
                <Grid xs={12}>
                   <div style={{display:'flex',justifyContent:'center',margin:"10px"}}>    
                   <ReactiveButton buttonState={state} onClick={onClickHandlerFull} color={"dark"} idleText={"FullStack"} loadingText={<React.Fragment><FaHammer/></React.Fragment>} successText={<React.Fragment><DiCodeBadge/></React.Fragment>}size={"large"} shadow={true} messageDuration={600}/>
                   <ReactiveButton buttonState={state1} onClick={onClickHandlerjs} color={"dark"} idleText={"HTML,CSS,JS"} loadingText={<React.Fragment><FaHammer/></React.Fragment>} successText={<React.Fragment><DiCodeBadge/></React.Fragment>}size={"large"}shadow={true}messageDuration={600}/>
                   <ReactiveButton buttonState={state2} onClick={onClickHandlernode} color={"dark"} idleText={"Node JS"} loadingText={<React.Fragment><FaHammer/></React.Fragment>} successText={<React.Fragment><DiCodeBadge/></React.Fragment>}size={"large"}shadow={true}messageDuration={600}/>               
                  </div>
                </Grid>
                <Grid xs={12}>
                <div >{project}</div>
                </Grid>             
          </Grid>
        </div> )

}

export default Projets;