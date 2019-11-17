export async function usersData(){
  let response = await fetch('//jsonplaceholder.typicode.com/users');
  let data = await  response.json();
  let firstNames = data.map(
    user => ((user.name.split(' ')[0]).indexOf('.') == -1 ? user.name.split(' ')[0] : user.name.split(' ')[1])
  )
  const stringNames = 'name[]='.concat(firstNames.join('&name[]='));
  /*
  Al parecer la API Genderize no permite peticiones desde afuera sin una llave,
  por lo que la implementación del género en la extracción de los avatares queda 
  comentada, pretendía usar en los atributos src de los nodos img una url como 
  //joeschmoe.io/api/v1/${gender}/${name}
  */ 
  //let genders = await fetch(`//api.genderize.io/?${stringNames}`);
  return [data,genders];
}

export async function postsData() {
  let response = await fetch('//jsonplaceholder.typicode.com/posts');
  let data = await response.json();
  return data;
}