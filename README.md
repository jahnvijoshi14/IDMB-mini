# IDMB-mini

Tools used:
1. HTML
2. CSS
3. Bootstrap
4. JavaScript
5. OMDB API


Functionality
1. Search movies with suggestions
2. Click on Movie title for more info(from search suggestions or favourities)
3. Add a movie to the favourites list(using local storage)
4. Delete movie from the favourites list

Hosted link: https://jahnvijoshi14.github.io/IDMB-mini/index.html

A mini IMDB clone app in which we can search movies based on OMDB API, with search suggestions. Clicking on a particular movie title opens a new movie page for more info. On clicking on the heart in search, we can add/remove a movie to the favourite list , which is using local storage to store movies. If the heart is red that means movie is added whereas if it is transparent that means movie is not added to the favourite list.In the nav bar we have two options one is Home which will redirect us to index.html and other is favourities which rediect us to favourities.html to view the list of favourites. Opening the favourities.html where all the favourites list is avaliable also a heart button is there clicking on which we can remove the movie from favourities and upon clicking on the movie title we can view the whole movie details.


home.js functionality :
function search(name) is used to search via API by passing name in it once we get the response we send the array to function showData(Search) to show the list of movies in front end. It is making a list which will be added to a drop box. Inside the list(title of movie) we are using an icon of heart shape here we are having two functionalities:-

1. onclick of list that is title of movie it will redirect to movie detail page using function moviedetails(id) , in this function we are concatenating id of movie with the url making it a query string.
2. onclicking the heart it will call toggleFavorities() it will basically provided the functionality like if we click on heart the movie will be added to localstorage and then and the color of heart changes to red if we again clicked of that same heart it will be removed from local storeage and heart will become transparent.
3. 3 eventlisteners are used in it that is click , keyup and keydown and on all of them callback function which is called is responding.

favourities.js:
function loadPage() will take all the data from localstorage , in local storage key is id of movie so, from each id its data will be fetched using API and addData() will be called which will render cards to the frontend. here also, we have the red heart upon clicking which removeFavorities() function is called whose functionality is:-
1. Remove id of that movie from local storage.
2. refresh the page again to render new data of local storage(using window.location.href = "favourites.html").

and, onclick of movie title it will redirect to movie detail page using function moviedetails(id) , in this function we are concatenating id of movie with the url making it a query string.

moviedetail.js:
getId() is called using window.location.search it will get the params of queryString and later substring it so that we can get the value of id, that id is then passed to loadPage() function from where we get the value of data w.r.t to id which is then passed to loadData() in which we render the data to the view.





