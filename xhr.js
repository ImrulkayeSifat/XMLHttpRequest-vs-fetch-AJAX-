const url = 'https://jsonplaceholder.typicode.com/users'

function myAxios(method,url){

  const xhr = new XMLHttpRequest();

  xhr.open(method,url);
  xhr.responseType = 'json';
  
  xhr.onload = () =>{
    if(xhr.status >=400){
      console.log('failed!')
    }else{
      console.log(xhr.response);
    }
    
  }
  
  xhr.onerror = () => {
    console.log('Error!!!');
  }
  
  xhr.send();

}

myAxios('GET',url);

