/*
* 03/02/2025, Luuk Fröling
*/

let hasLiked = false; 
let likes

document.addEventListener("DOMContentLoaded", function() {
    // see if user has liked => use local storage as we are using a non userdata database. 
    hasLiked = localStorage.getItem('hasLiked');
    hasLiked == null ? localStorage.setItem('hasLiked', JSON.stringify(false)) : null;
    
    let body;
    getLikes(body);
    
});

let onLike = () => {
    let likeButton = document.getElementById("likeButton");
    likeButton.style.backgroundColor = "#90ee90";
    likeButton.onclick = onDislike;
    likeButton.innerHTML = "👍" + (likes+1) + " ";
    likes += 1;
    changeLike(1)
    localStorage.setItem('hasLiked', JSON.stringify(true));
}

let onDislike = () => {
    let likeButton = document.getElementById("likeButton");
    likeButton.style.backgroundColor = "#ffffff";
    likeButton.onclick = onLike;
    likeButton.innerHTML = "👍" + likes + " ";
    likes -= 1;
    changeLike(-1);
    localStorage.setItem('hasLiked', JSON.stringify(false));
}


/* because jupyter book next seems to reload the page after loading it the first time,
*   we check again after a second to see if our data is displayed properly.  The strings can be changed, then also change string in md file.
*/

let loadItem = (body, _likes) => {
    likes = _likes;
    console.log(likes)
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
        let a = document.createElement("button");
        a.innerHTML = "👍" + likes;
        a.id = "likeButton";

        if(!hasLiked){
            console.log("has not liked!!");
            a.style.backgroundColor = "#ffffff";
            a.onclick = onLike;
        } 
        if(hasLiked){
            console.log("has liked!!");
            a.style.backgroundColor = "#90ee90";
            a.onclick = onDislike;
        }
        
        document.getElementsByClassName("flex items-center flex-grow w-auto")[0].appendChild(a);
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
        .then(data => loadItem(body, parseLikes(data)))	
        .catch(error => console.error("Error loading JSON:", error));
};

let parseLikes = (data) => {
    console.log("in parselikes : ", data);
    const key = document.location.pathname.replace(/\//g, "_");
    return data[key] !== null ? data[key] : addPage().then(() => 0); // Ensure addPage() resolves before returning
};

// Add to the JSON file in the database
let addPage = () => {
    let URL = "https://jupyter-book-likes-default-rtdb.europe-west1.firebasedatabase.app/likes.json";

    return fetch(URL, {
        method: "PATCH",
        body: JSON.stringify({ [document.location.pathname.replace(/\//g, "_")]: 0 }), // Start with 0 likes
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(() => 0) // Ensure the function returns a resolved value
    .catch(error => {
        console.error("Error initializing like count:", error);
        return 0; // Ensure function still returns 0 in case of failure
    });
};

let changeLike = (change) => {
    fetch(databaseURL, {
        method: "GET"
       })
       .then(response => response.json())
       .then(data => {
           // Increment the likes value
           let newLikes = data ? data + change : 1; // Update the database with the new likes count
           fetch(databaseURL, {
               method: "PUT", // Overwrite with new value
               body: JSON.stringify(newLikes),
               headers: {
                   "Content-Type": "application/json"
               }
           })
           .then(() => {
                console.log("Likes updated to", newLikes);
           })
           .catch(error => console.error("Error updating likes:", error));})
       .catch(error => console.error("Error fetching current likes:", error));   
}


