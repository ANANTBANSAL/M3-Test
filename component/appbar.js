import { AppBar, Toolbar,Button, makeStyles } from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom';

const useStyles=makeStyles((theme)=>({
    button:{
     color:'white',
    }
}));
const Appbar=()=>{
const classes=useStyles();

    return(
<AppBar>
    <Toolbar>
    <Link to='/' exact> 
    <Button className={classes.button} >
        View Data     
         </Button>
         </Link>
         <Link to='/delete' exact>
         <Button className={classes.button}>
        Delete Data     
         </Button>
         </Link>
         <Link to="/add">
         <Button className={classes.button} >
        Add Data     
         </Button>
         </Link>
         <Link>
         <Button className={classes.button}>
        Update Data     
         </Button>
         </Link>
    </Toolbar>
</AppBar>

    );
}
export default Appbar;