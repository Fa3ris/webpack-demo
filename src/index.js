import _ from 'lodash';
import './style.css';
import Lion from './lion.png';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
   const icon = new Image();
   icon.src = Lion;

   element.appendChild(icon);
  
    return element;
  }
  
  document.body.appendChild(component());