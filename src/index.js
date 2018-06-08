// Modules
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

// Components
import App from './App';


const $node = document.querySelector("#app");
!!$node && render(<App />, $node);