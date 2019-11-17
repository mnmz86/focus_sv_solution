import PostContainer from './components/post-container.js';
import UserInfo from './components/user-info.js';
import {usersData, postsData} from './services.js';
usersData().then(results => results).then(data => console.log(data))
postsData().then(data => console.log(data));
console.log(postsData);
const saludo = "Hola desde archivo principal";
console.log(saludo);