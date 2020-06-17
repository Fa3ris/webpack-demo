import _ from 'lodash';
import './style.css';
import Lion from './lion.png';
import homeComponent from './app/home/home.js';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
   const icon = new Image();
   icon.src = Lion;
   icon.height = 150;
   icon.width = 150;

   element.appendChild(icon);

   element.appendChild(homeComponent());

   btn.innerHTML = 'Click me and check the console!';
   btn.onclick = printMe;

   element.appendChild(btn);
  
    return element;
  }
  
  document.body.appendChild(component());