import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Container from './Container';
import Write from './Write';
import View from './View';

function App() {
  return (
    <HashRouter>
      <h1>미니 게시판</h1>
      <Route exact path = "/" component = {Container} />
      <Route path = "/write" component = {Write} /> 
      {
        JSON.parse(localStorage.getItem('board')) 
          ?
          JSON.parse(localStorage.getItem('board')).map((contact, index) => {
            return (
              <Route key = { index } path = {"/bbsID" + (index+1) } component = {View} />
            )
          })
          :
          null
      }
    </HashRouter>
  );
}

export default App;
