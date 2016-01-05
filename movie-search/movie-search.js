// This is what the data returning from IMDB will look like:
var sampleResult = {
  "Search": [
    {
      "Title": "Cool Runnings",
      "Type": "movie",
      "Year": "1993",
      "imdbID": "tt0106611"
    }
  ]
}

// Attach an event listener to the form submit (using jQuery)
$("#movie-search-form").submit(formSubmitted);

// Handle the form submission: go to OMDB and get results
function formSubmitted(event) {
  event.preventDefault();
  var url = "http://omdbapi.com/?s=" + $("#query").val();
  $.get(url, resultsReceived);
}

var ul = document.querySelector("ul");

function resultsReceived(results) {
  // Try putting a debugger here and inspecting the results argument
  // The array of movies lives inside results["Search"]
  var searchResults = results["Search"];
    // See the sampleResult above for an example
  for (var i = 0; i < searchResults.length; i++) {
	var movie = searchResults[i];
  	var li = document.createElement("li");
  	var div1 = document.createElement("div");
  	var link = document.createElement("a");
  	var div2 = document.createElement("div");
  	var year = movie["Year"];
  	var title = movie["Title"];
  	var imdb = "http://www.imdb.com/title/" + movie["imdbID"];
  	
  	li.classList.add("movie");
  	link.setAttribute("url", imdb);
  	link.setAttribute("target", "_blank");
	div1.classList.add("movie-title");
	div1.textContent = title;
	div2.classList.add("movie-release-date");
	div2.textContent = year;

		
	div1.appendChild(link);
	li.appendChild(div1);
	li.appendChild(div2);
	ul.appendChild(li);
	}

  // Access the array of movies:
  console.log(searchResults);

  // Access the first movie title
  console.log(searchResults[0]["Title"]);

}
