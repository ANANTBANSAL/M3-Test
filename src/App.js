import { Container } from '@material-ui/core';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Appbar from './component/appbar.js';
import Deleteapi from './component/delete.js';
import Updateapi from './component/updateapi.js';
import Postapi from './component/postapi.js';
import Getapi from './component/getapi.js';
function App() {
  return (
    <BrowserRouter>
    <Container>
    <Appbar/>
    <Switch>
    
       
        <Route exact path='/add'     component={Postapi}/>
        
        <Route  exact  Path='/update'  component={Updateapi}/>
        
        <Route  exact  Path='/delete'  component={Deleteapi}/> 
        
        <Route  exact Path='/get'   component={Getapi}/>
        
        </Switch>

    </Container>
    </BrowserRouter>
   
  );
}

export default App;
