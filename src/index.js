import PostContainer from './components/post-container.js';
import UserInfo from './components/user-info.js';
import {getAllData} from './services.js';

let rootTag = document.getElementById('root');
getAllData().then(users => {
    users.forEach(user => {
        let userTag = document.createElement('user-info');
        userTag.setAttribute('data-user', JSON.stringify(user));
        root.appendChild(userTag);
        user.posts.forEach(post => {
            let postTag = document.createElement('post-container');
            postTag.setAttribute('data-post', JSON.stringify(post));
            user.posts.indexOf(post)%2 ? postTag.setAttribute('class', 'red') : null
            userTag.appendChild(postTag);
        });
    });
});