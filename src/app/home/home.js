import './home.css';

export default function homeComponent() {

    console.log('hello');
    const element = document.createElement('div');
  
    element.innerHTML = 'home element works !';
    element.classList.add('home');
  
    return element;
}