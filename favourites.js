
let contents="";
function loadPage()
{
  for(let i=0;i<localStorage.length;i++)
  {
    
    
    let url="http://www.omdbapi.com/?i="+localStorage.key(i)+"&apiKey=ea448adb"    
    fetch(url)
    .then(response=>{

    return response.json();
    })
    .then(result=>{
     
     if(result.Response==="False")
     {
      
      return;
     }
    
    console.log(result)
   
    contents=contents+addData(result);
    
    document.getElementById("main").innerHTML=contents;
    
    })
  }

}

function addData(result)
{

 

  let data=
  "<div class='card mb-3 grad-div' style='max-width: 540px;'>"+
   "<div class='row g-0'>"+
   "<div class='col-md-4'>"+
   "<img src=\""+result.Poster+"\" class='img-fluid rounded-start' style='height:85% !important; width:77%' alt='...'>"+
   "</div>"+
  "<div class='col-md-8'>"+
      "<div class='card-body'>"+
        "<h5 class='card-title' onclick='moviedetails(\""+result.imdbID+"\")' >"+result.Title+"</h5>"+
        "<p class='card-text' >"+result.Plot.substring(0,160)+"...</p>"+
        "<p class='card-text'><button class='text-muted' data-bs-toggle='tooltip' data-bs-placement='right' title='click to remove from favourites' onclick='removeFavorities(\""+result.imdbID+"\")'><i class='fa fa-heart' style='font-size:20px;color:red ;margin-right=1%;'></i></button></p>"+
      "</div>"+
    "</div>"+
  "</div>"+
"</div>";

return data;


}

function removeFavorities(id)
{
  console.log(id);
  if(window.localStorage.getItem(id)==="true"){
    localStorage.removeItem(id);
    return;
  }
 
  window.location.href = "favourites.html";
}



function moviedetails(id)
{

  window.location.href = "moviedetail.html?id="+id;

}

loadPage();
