import React, { memo, useEffect, useContext, useRef } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useLocation,
  withRouter
  
} from "react-router-dom";

import App from "./App";


export default function() {
 
  return (
      <BrowserRouter>
            <Switch>
               <Route path="*" exact children={<App/>} />
             
            </Switch>
      </BrowserRouter>
  );
}