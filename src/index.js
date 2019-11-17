import PostContainer from './components/post-container.js';
import UserInfo from './components/user-info.js';
import {getUsersData, getPostsData, getAllData} from './services.js';

const rootTag = document.getElementById('root');
getUsersData().then(users =>{
    users.forEach(user => {
        let userTag = document.createElement('user-info');
        userTag.setAttribute('data-user', JSON.stringify(user));
        root.appendChild(userTag);
    });
});

const userTags = document.getElementsByTagName('user-info');
getPostsData().then(posts => {
    posts.forEach(post => {
        let postTag = document.createElement('post-container');
        postTag.setAttribute('data-post', JSON.stringify(post));
        posts.indexOf(post)%2 ? postTag.setAttribute('class', 'red') : 0
        userTags[post.userId-1].appendChild(postTag);
    });
});

getAllData().then(result => console.log(result))