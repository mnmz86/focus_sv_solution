export async function getUsersData(){
  let response = await fetch('//jsonplaceholder.typicode.com/users');
  let data = await  response.json();
  let dataWithFirstNames = data.map(
    user => {
      if((user.name.split(' ')[0]).indexOf('.') == -1) {
        user.firstName = user.name.split(' ')[0]
      }
      else {
        user.firstName = user.name.split(' ')[1]
      }
      return user;
    }
  );
  return dataWithFirstNames;
}

export async function getPostsData() {
  let response = await fetch('//jsonplaceholder.typicode.com/posts');
  let data = await response.json();
  return data;
}

export async function getAllData() {
  let usersData = await getUsersData();
  let postsData = await getPostsData();
  usersData.forEach(user => {
    let posts = postsData.filter(post => post.userId == user.id);
    user['posts'] = posts.sort((postX, postY) => postY.title.length - postX.title.length);
  });
  return usersData;
}