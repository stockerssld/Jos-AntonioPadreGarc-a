import React, { memo } from "react";
import {
  BrowserRouter,
  Switch,
  Route,  
} from "react-router-dom";

import App from "./App";


export default memo(function() {
 
  return (
      <BrowserRouter>
            <Switch>
               <Route path="*" exact children={<App/>} />
             
            </Switch>
      </BrowserRouter>
  );
})