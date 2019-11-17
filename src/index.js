import PostContainer from './components/post-container.js';
import UserInfo from './components/user-info.js';
import {postsData} from './services.js';

postsData().then(data => console.log(data));
console.log(postsData);
const saludo = "Hola desde archivo principal";
console.log(saludo);