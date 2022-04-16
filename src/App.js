import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import Dialogs_item from './components/dialogs/dialogs_item/Dialogs_item';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
function App(props) {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header/>
        <Navbar/>
        <Switch>
          <Route exact path="/profile" render={() =><Profile postsData={props.postsData}/>} />
          <Route exact path="/" render={() =><Profile postsData={props.postsData}/>}/>
          <Route exact path="/dialogs" render={() =><Dialogs dialogsNames = {props.dialogsNames} messagesNames = {props.messagesNames}/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
