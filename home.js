

const searchBar =document.getElementById("searchfield");
const list=document.getElementById("list");
const searchButtom=document.getElementById("search");




// var hasFocus = $('#searchfield').is(':focus');
// if(!hasFocus){
//   list.style.display="none";
//   list.disabled=true;
// }

function search(name){
let url="http://www.omdbapi.com/?s="+name+"&apiKey=ea448adb"    
fetch(url)
.then(response=>{
    return response.json();
})
.then(result=>{
     console.log(result)
     if(result.Response==="False")
     {
      createToast(result.Error);
      return;
     }
    //let data= JSON.parse(result);
    console.log(result.Search)
    showData(result.Search);
    //document.getElementById("o").innerHTML=data.Title;
})
}

function createToast(message)
{
  console.log("toast")
  //alert(message);
}

function showData(Search)
{
  if(Search){
    
    let content="";
    
    
    
  for (var i = 0; i <Search.length; i++) { 

    if(localStorage.getItem(Search[i].imdbID)!=="true"){
    content=content+"<li onclick='moviedetails(\""+Search[i].imdbID+"\")'  class='dropdown-item' >"+Search[i].Title+"<i class='fa fa-heart-o' data-bs-toggle='tooltip' data-bs-placement='right' title='click here to Add to Favorites'  style='font-size:20px;color:red ;margin-right=1%;' onclick='toggleFavorities(\""+Search[i].imdbID+"\",event)' id="+Search[i].imdbID+"></i></li>"
    }
    else{
      content=content+"<li onclick='moviedetails(\""+Search[i].imdbID+"\")'  class='dropdown-item'>"+Search[i].Title+"<i class='fa fa-heart' data-bs-toggle='tooltip' data-bs-placement='right' title='Added to Favorites' style='font-size:20px;color:red ;margin-right=1%;' onclick='toggleFavorities(\""+Search[i].imdbID+"\",event)' id="+Search[i].imdbID+"></i></li>"
    }
    
  }
    list.style.display="block";
    list.disabled=false;
    list.innerHTML=content;
} 
}


function toggleFavorities(id , event)
{
  console.log(event)
  event.stopPropagation();
  console.log(id);
  if(window.localStorage.getItem(id)==="true"){
    localStorage.removeItem(id);
    var element = document.getElementById(id);
    element.classList.remove("fa-heart");
    element.classList.add("fa-heart-o");
    
    return;
  }
    var element = document.getElementById(id);
    element.classList.remove("fa-heart-o");
    element.classList.add("fa-heart");
    window.localStorage.setItem(id,"true")

  
  
}


function responding(event)
{
  let name=searchBar.value;
  console.log(event.target.id)
   if(event.target.id==="search")
   {
    console.log(name)
    if(name){
    search(name);
    }
   }  

    if(event.target.id=="searchfield")
    {
      
      if(event.target.value&&name&&name!=""&&name!=" "){
      console.log(name)  
      search(name);
      }
      else
      {
        list.style.display="none";
        list.disabled=true;
        
      }
    }
     
}




function moviedetails(id)
{

  window.location.href = "moviedetail.html?id="+id;

}





searchButtom.addEventListener('click',responding);
searchBar.addEventListener('keydown',responding);
searchBar.addEventListener('keyup',responding);



