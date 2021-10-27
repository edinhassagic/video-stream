import {Switch, Route} from "react-router-dom";

import Home from "./Home"
import CreateStream from "./CreateStream";
import EditStream from "./EditStream";
import Header from "./Header";
import StreamShow from "./StreamShow";



function App() {
  return (
    
    <div>
    <Switch>
     <Route exact path = "/" component={Home} />
     <Route exact path = "/createStream" component={CreateStream} />
     <Route exact path = "/editStream/:id" component={EditStream} />
     <Route exact path = "/StreamShow/:id" component={StreamShow} />
     <Route exact path = "/" component={Header} />
    
 
   
    </Switch>

    </div>
  );
}

export default App;
