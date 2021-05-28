import React from 'react';
import { Grid,Container,TextField, Typography, Button, makeStyles } from '@material-ui/core';
const useStyles=makeStyles((theme)=>({

    container:{        
    alignContent:'cemter'
},
button:{
    background:'rgb(44, 26, 94)',
    color:'white',
    width:260,

},
textfield:{
    height:45,
    width:200,
    marginBottom:35,
    marginLeft:20,
},
Typography:{
    marginTop:15,
    height:45,
    width:45,
    fontsize:40,
},
main:{
    alignContent:'center'
}

}));

const Formdata=(props)=>{
    const classes=useStyles();

    return(
        <li key={props.id}>
          <Container className={classes.container} key={props.id}>
        <Grid  key={props.id} className={classes.main} container direction='column'>
          <Grid item container direction='row'> 
         <Typography className={classes.Typography}>Title</Typography>
         <TextField className={classes.textfield} id="title" label="title" variant="outlined" onChange={props.handleInput}/>
          </Grid>
          <Grid item container direction='row'> 
         <Typography className={classes.Typography}>Body</Typography>
         <TextField className={classes.textfield} id='body' label='body' variant='outlined'
           onChange={props.handleInput}/>
          </Grid>
          <Grid container item>
          <Button className={classes.button} onClick={props.submit}>
              {props.buttonName}
            </Button>
          </Grid>
        </Grid>
      </Container>

        </li>

    );
}
export default Formdata;