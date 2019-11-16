import ApiComponent from './components/api-component.js';

let el= new ApiComponent();
document.querySelector("body").appendChild(el);
const saludo = "Hola desde archivo principal";
console.log(saludo);