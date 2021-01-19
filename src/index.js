import React from 'react';
import ReactDOM from 'react-dom';
import { HeroesApp } from './HeroesApp';



ReactDOM.render(
  <HeroesApp />, 
  document.getElementById('root')
);

if (import.meta.hot) {
  import.meta.hot.accept();
}