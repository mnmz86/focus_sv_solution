export async function getUsersData(){
  const response = await fetch('//jsonplaceholder.typicode.com/users');
  let data = await  response.json();
  let usersFirstName = [];
  //extracción de primer nombre
  data.forEach(
      user => {
        //manejo de prefijo abreviado Mrs.
        if((user.name.split(' ')[0]).indexOf('.') == -1) {
          user.firstName = user.name.split(' ')[0]
        }
        else {
          user.firstName = user.name.split(' ')[1]
        }
        usersFirstName.push(user.firstName);
        return user;
      }
    );

  //emular el navegador y evitar la el bloqueo desde otro origen
  const stringNamesParam = 'name[]='.concat(usersFirstName.join('&name[]='));
  const genderUrl = `https://api.genderize.io/?${stringNamesParam}`;
  const scrapPayload = {
    url: genderUrl,
    renderType: "plainText",
    outputAsJson: true,
    suppressJson:["originalRequest","pageResponses","meta.trace", "queryJson"]
  };
  const scrapUrl = `//PhantomJsCloud.com/api/browser/v2/ak-1jwav-bg6ng-92gm3-atm3c-mnsv2/?requestBase64=${btoa(JSON.stringify(scrapPayload))}`
  const gendersRequest = await fetch(scrapUrl);
  const gendersResponse = await gendersRequest.json();
  let genders = JSON.parse(gendersResponse.content.data);
  
  //agregado de género
  data.forEach(
    (user, i) => user.gender = genders[i].gender
  );

  return data;
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