import React from 'react';
import{BrowserRouter as Router, Switch, Route, Link}from "react-router-dom";

import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './page/dashboard/Dashboard.page';
import { ParticularModule } from './page/module/ParticularModule.page';

import {Button} from 'react-bootstrap'
import { Entry } from './page/entry/Entry page';
import { AddStudent } from './page/add-student/AddStudent.page';
import QRCode from 'qrcode';


function App() {
  return(
    <div className="App">
      <Router>
        <Switch> 
        <Route exact path="/">
            <Entry />
          </Route> 
          <DefaultLayout>
            <Route path="/dashboard">
              <Dashboard/>
            </Route>
            <Route path="/p-module">
              <ParticularModule/>
            </Route>
            <Route path="/add-student">
              <AddStudent/>
            </Route>
            
          </DefaultLayout>
          
        </Switch>
      </Router>
  </div>
  );
}

export default App;
