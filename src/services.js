export async function usersData(){
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

export async function postsData() {
  let response = await fetch('//jsonplaceholder.typicode.com/posts');
  let data = await response.json();
  return data;
}