import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';
import './App.css';
import { useStateValue } from './components/StateProvider';

function App() {

  const [{ user }, dispatch] = useStateValue(null);

  return (

    <div className="app">
      {!user ? (

        <Login />

      ) : (

        <div className="app__body">
        <Router>
         <Sidebar />
          <Switch>
            
            <Route path="/rooms/:roomID">
               <Chat />
            </Route>

            <Route path="/" exact>
              {/* <Chat /> */}
            </Route>

          </Switch>
        </Router>
          
         
      </div>

      )}
      
    </div>
  );
}

export default App;
