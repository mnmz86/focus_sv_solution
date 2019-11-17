import PostContainer from './components/post-container.js';
import UserInfo from './components/user-info.js';
import {usersData, postsData} from './services.js';

const rootTag = document.getElementById('root');
usersData().then(users =>{
    users.forEach(user => {
        let userTag = document.createElement('user-info');
        userTag.setAttribute('data-user', JSON.stringify(user));
        root.appendChild(userTag);
    });
});

const userTags = document.getElementsByTagName('user-info');
postsData().then(posts => {
    posts.forEach(post => {
        let postTag = document.createElement('post-container');
        postTag.setAttribute('data-post', JSON.stringify(post));
        userTags[post.userId-1].appendChild(postTag);
    });
});