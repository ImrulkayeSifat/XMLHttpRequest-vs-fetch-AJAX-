const url = 'https://jsonplaceholder.typicode.com/users'

function myAxios(method,url,body=null){

  return new Promise((resolve,reject)=>{
    
    const xhr = new XMLHttpRequest();

    xhr.open(method,url);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type','application/json')
  
    xhr.onload = () =>{
      if(xhr.status >=400){
        reject(xhr.response);
      }else{
        resolve(xhr.response);
      }
      
    }
    
    xhr.onerror = () => {
      reject(xhr.response);
    }
    
    xhr.send(JSON.stringify(body));

  })

}

// myAxios('GET',url);

myAxios('POST',url,{
  name:'sifat',
  job:'software developer'
}).then((res)=>{
  console.log(res);
}).catch((err)=>{
  console.log(err);
});