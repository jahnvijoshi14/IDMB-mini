
function getId()
{
    let id="";
    id=window.location.search;
    
    id=id.substring(4);
    console.log(id)
    loadPage(id);

}

function loadPage(id)
{   
    let url="http://www.omdbapi.com/?i="+id+"&apiKey=ea448adb"    
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
    loadData(result)
    
    })
}


function loadData(result)
{
    let plot="<div class='description'><strong> Description: </strong>"+result.Plot+"</div><br>"+
             "<div><label>Cast: <strong> "+result.Actors+"</strong> </label></div>"+
             "<div><label>Imdb Rating: <Strong>"+result.imdbRating+"</strong>&nbsp <i class='fa fa-star clicked'></i>"+
             "<i class='fa fa-star clicked'></i><i class='fa fa-star clicked'></i><i class='fa fa-star clicked'></i>"+
             "<i class='fa fa-star'></i></label></div>"+
             "<div><label>Genre: <strong>"+result.Genre+"</strong></label></div>"
             


    document.getElementById("description").innerHTML=plot
    document.getElementById("pic").src=result.Poster
    document.getElementById("title").innerHTML=result.Title



}

getId();

