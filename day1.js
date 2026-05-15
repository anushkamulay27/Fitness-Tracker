const url = "https://jsonplaceholder.typicode.com/posts/1";
async function getData(){
   const response = await fetch(url);
    const data = await response.json();
    console.log(data)
}
getData();