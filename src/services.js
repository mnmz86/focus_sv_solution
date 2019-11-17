export async function usersData(){
  let response = await fetch('//jsonplaceholder.typicode.com/users');
  let data = await  response.json();
  let firstNames = data.map(
    user => ((user.name.split(' ')[0]).indexOf('.') == -1 ? user.name.split(' ')[0] : user.name.split(' ')[1])
  )
  
  return firstNames;
}

export async function postsData() {
  let response = await fetch('//jsonplaceholder.typicode.com/posts');
  let data = await response.json();
  return data;
}