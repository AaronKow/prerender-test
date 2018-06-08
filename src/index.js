// Modules
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

// Components
import App from './App';


// Working
const app = document.querySelector("#app");
!!app && render(<App />, app);

// Not working
// window.onload = () => {
//     const $app = document.querySelector("#app");
//     render(<App />, $app);
// }

// Not working
// const $app = document.querySelector("#app");
// !!$app && import(/* webpackChunkName: "app" */ './App').then(module => {
//     const init = module.default;
//     init($app);
// });
