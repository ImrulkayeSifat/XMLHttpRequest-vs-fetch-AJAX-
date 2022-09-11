const url = 'https://jsonplaceholder.typicode.com/users'


function myAxios(method,url,body=null){
  return fetch(url).then((res)=>{
    return res.json();
  })
}

myAxios('GET',url).then((res)=>{
  console.log(res);
}).catch(err=>{

})