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

let loadItem = (body, likes) => {
    
    body = document.body.innerHTML;
    let stringToFind = "Loading...";
    let intermediateString = "Loading.. "

    // replace with string containing number of likes and button to add a like
    let stringToReplace = "Likes: " + likes + "<button id='likeButton'>👍 Like</button>";
    
    //Find string in current page
    if(body.includes(stringToFind)){
        document.body.innerHTML = body.replace(stringToFind, intermediateString);
        return setTimeout(() => loadItem(body, likes), 1000);
    } else if(body.includes(intermediateString)){
        document.body.innerHTML = body.replace(intermediateString, stringToReplace);;
        return setTimeout(() => loadItem(body, likes), 1000);
    } else {
        let a = document.createElement("a");
        a.innerHTML = "👍" + likes;
        document.getElementsByClassName("flex items-center flex-grow w-auto")[0].appendChild(a)
        return; 
    }
}

/* Load data from github json file
*
*/
const databaseURL = "https://jupyter-book-likes-default-rtdb.europe-west1.firebasedatabase.app/likes.json";


let getLikes = (body) => {
    fetch(databaseURL)
    .then(response => response.json())
    .then(data => loadItem(body, data))	
    .catch(error => console.error("Error loading JSON:", error));
}

// fetch(databaseURL, {
//     method: "GET"
//   })
//   .then(response => response.json())
//   .then(data => {
//     // Increment the likes value
//     let newLikes = data ? data + 1 : 1;
//     // Update the database with the new likes count
//     fetch(databaseURL, {
//       method: "PUT", // Overwrite with new value
//       body: JSON.stringify(newLikes),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//     .then(() => {
//       console.log("Likes updated to", newLikes);
//     })
//     .catch(error => console.error("Error updating likes:", error));
//   })
//   .catch(error => console.error("Error fetching current likes:", error));
