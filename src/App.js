import React, {useState, useContext} from 'react';
import { BrowserRouter, Route, Switch} from  'react-router-dom';
import AppContext from './AppContext';
import LandingPage from './LandingPage';
import Contact from './Contact';


const App =()=>{
    const [globalState, setGlobalState]= useState(
        {
          loggedIn: false 
        }
    )
return(
<AppContext.Provider value={[globalState, setGlobalState]}>
    <BrowserRouter>
        <Switch>
                <Route path="/" exact component={(LandingPage)}/>
                <Route path="/Contact" component={Contact}/>
        </Switch>

    </BrowserRouter>

</AppContext.Provider>
  
)
}


export default App;