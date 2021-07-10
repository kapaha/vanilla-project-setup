import './styles/styles.css';
import helloWorld from './test';

const button = document.querySelector('.test');

button.addEventListener('click', () => {
    helloWorld();
});
