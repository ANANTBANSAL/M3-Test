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
    <Link to='/get'> 
    <Button className={classes.button} component={Link} to='/get'>
        View Data     
         </Button>
         </Link>

         <Link to='/delete'>
         <Button className={classes.button} component={Link} to='/delete'>
        Delete Data       
         </Button>
         </Link>

         <Link to="/add">
         <Button className={classes.button} component={Link} to='/add'>
        Add Data     
         </Button>
         </Link>
         <Link to="/update">
         <Button className={classes.button} component={Link} to='/update'>
        Update Data     
         </Button>
         </Link>
    </Toolbar>
</AppBar>

    );
}
export default Appbar;