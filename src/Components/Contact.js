import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import ReactiveButton from 'reactive-button';
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';
import { GiClick} from 'react-icons/gi';
import { VscLoading} from 'react-icons/vsc';
import { RiThumbUpFill} from 'react-icons/ri';
import { motion } from "framer-motion";
init("user_M0Rn5dc64ZbKm5eyYuZvO");



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: '30ch',
      color:"white",
      textColor:"white"   
    },
    },
}));
const gridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textColor:"white",
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.secondary,
  },
}));


export default function FormPropsTextFields() {
  const classes = useStyles();
  const grid=gridStyles();
  

  const[form,setForm]=useState({name:"",mail:"",message:""});
  const[alertMessage,setAlertMessage] = useState({name:"",mail:"",message:""});
  const [state, setState] = useState("idle");
  const letter={
    from_name:form.name,
    to_name:form.mail,
    message:form.message
  }
  
  

   const onClickHandler = () => {
      setState('loading');
      const {name,mail,message}=form;
    if(name===""){
        setAlertMessage({...alertMessage,name:"name can't be epmty"});
         
    }else if(mail===""){
      setAlertMessage({...alertMessage,mail:"mail can't be epmty"});
    
    }else if(message===""){
      setAlertMessage({...alertMessage,message:"message can't be epmty"});
   
     }else{
      
      emailjs.send('service_1axqgws', 'template_6tzdcfu', letter)
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
         setState("success")
      }, function(error) {
         console.log('FAILED...', error);
         setState("something went wrong")
         
      });
        
     }
    }
  return (

    <div className={grid.root}>
     <Grid container spacing={5}>
     <Grid xs={12} >
     <div  style={{diplay:"flex",justifyContent:"center",textAlign:"center"}}   >
              <Card  style={{backgroundColor:"#195190FF",color:"#A2A2A1FF"}}>
                <CardContent>
                  <Typography variant="h3">CONTACT ME</Typography>
                </CardContent>
              </Card>
      </div>
       </Grid>
       <Grid xs={12} sm={2}>
       </Grid>
       <Grid xs={12} sm={5}>
          <div>
             <Card style={{marginTop:"20px",height:"400px",width:"500px",justifyContent:"center"}}>  
             <motion.div whileHover={{ scale:1.2}} >
               <CardContent>
               <img src='https://i.postimg.cc/63VsCrYy/removal-ai-tmp-60963a52928ae.png' alt="mail" style={{marginLeft:"100px"}}></img>
               </CardContent>
            </motion.div>
            </Card>
            
            {/* <img src="https://maxst.icons8.com/vue-static/landings/animated-icons/icons/mailbox/mailbox.json"></img> */}
          </div>
          </Grid>   
        <Grid item xs={12} sm={4} md={3}>
        <motion.div whileHover={{ scale:1.1}} >
        <Card style={{color:"white",width:"400px",height:"400px",marginLeft:"20px"}}>
        <CardContent>
        <form className={classes.root} noValidate autoComplete="off"> 
        <TextField  type="text"color="secondary" id="filled-helperText" label="Name" onChange={(e)=>setForm({...form,name: e.target.value})} placeholder="enter name" helperText={alertMessage.name}/>
        <TextField type='email' id="filled-helperText" color="secondary"label="Mail"onChange={(e)=>setForm({...form,mail: e.target.value})}   placeholder="enter mail" helperText={alertMessage.mail}/>
        <TextareaAutosize  style={{width:"35ch",marginLeft:"25px"}} rowsMax={10}  aria-label="maximum height" onChange={(e)=>setForm({...form,message: e.target.value})} placeholder="comments//" rowsMin={5}/>
       </form>
        <ReactiveButton buttonState={state} onClick={onClickHandler}
         color={'teal'}
         idleText={<GiClick/>}
         loadingText={<VscLoading/>}
         successText={<RiThumbUpFill/>}
        
         type={'button'}
         className={'class1 class2'}
         style={{ borderRadius: '1px',marginLeft:"80px" }}
         outline={true}
         shadow={true}
         rounded={false}
         size={'normal'}
         animation={true}
         disabled={((form.message==="")||(form.mail==="")||(form.message===""))}/>
          </CardContent>
              </Card> 
        </motion.div>

       
        </Grid>
       
       
        </Grid>
     

    </div>
    
  );
}


