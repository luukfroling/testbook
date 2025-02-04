/*
* 03/02/2025, Luuk Fröling
*/

document.addEventListener("DOMContentLoaded", function() {
    let body;
    getLikes(body);
});


/* because jupyter book next seems to reload the page after loading it the first time,
*   we check again after a second to see if our data is displayed properly.  The strings can be changed, then also change string in md file.
*/

let loadItem = (body, text) => {
    console.log(text, text['likes'], text.likes);
    body = document.body.innerHTML;
    let stringToFind = "Loading...";
    let intermediateString = "Loading.. "
    let stringToReplace = "Likes: " + text;
    
    //Find string in current page
    if(body.includes(stringToFind)){
        document.body.innerHTML = body.replace(stringToFind, intermediateString);
        return setTimeout(loadItem, 1000);
    } else if(body.includes(intermediateString)){
        document.body.innerHTML = body.replace(intermediateString, stringToReplace);;
        return setTimeout(loadItem, 1000);
    } else {
        return; 
    }
}

/* Load data from github json file
*
*/

let getLikes = (body) => {
    fetch("https://raw.githubusercontent.com/luukfroling/testbook/main/data/data.json")
    .then(response => response.json())
    .then(data => loadItem(body, data))	
    .catch(error => console.error("Error loading JSON:", error));
}




