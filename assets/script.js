/*
* 03/02/2025, Luuk Fröling
*/

let likes;
let hasLiked;

document.addEventListener("DOMContentLoaded", function() {
    let path = document.location.pathname.replace(/\//g, "_");
    hasLiked = JSON.parse(localStorage.getItem(`hasLiked_${path}`)) || false;

    console.log("Has liked:", hasLiked); 
    
    let body;
    getLikes(body);
});

let onLike = () => {
    let path = document.location.pathname.replace(/\//g, "_");
    let likeButton = document.getElementById("likeButton");
    likeButton.style.backgroundColor = "#90ee90";
    likeButton.onclick = onDislike;
    likes += 1;
    likeButton.innerHTML = "👍" + likes + " ";
    changeLike(1);
    localStorage.setItem(`hasLiked_${path}`, JSON.stringify(true));
}

let onDislike = () => {
    let path = document.location.pathname.replace(/\//g, "_");
    let likeButton = document.getElementById("likeButton");
    likeButton.style.backgroundColor = "#ffffff";
    likeButton.onclick = onLike;
    likes -= 1;
    likeButton.innerHTML = "👍" + likes + " ";
    changeLike(-1);
    localStorage.setItem(`hasLiked_${path}`, JSON.stringify(false));
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
    if (data == null || data == undefined) {
       addPage();
       return 0; 
    } 

    if(data[key] == null || data[key] == undefined){
        addPage();
        return 0;
    }

    if(data[key] != null && data[key] != undefined){
        return data[key];
    }

};

// Add to the JSON file in the database
let addPage = () => {
    let URL = "https://jupyter-book-likes-default-rtdb.europe-west1.firebasedatabase.app/likes.json";

    fetch(URL, {
        method: "PATCH",
        body: JSON.stringify({ [document.location.pathname.replace(/\//g, "_")]: 0 }), // Start with 0 likes
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(() =>console.log("Page added to database"))
    .catch(error => console.error("Error initializing like count:", error));
};

let changeLike = (change) => {
    const key = document.location.pathname.replace(/\//g, "_");
    fetch(databaseURL)
        .then(response => response.json())
        .then(data => {
            let currentLikes = data && data[key] ? data[key] : 0;
            let newLikes = currentLikes + change;

            return fetch(databaseURL, {
                method: "PATCH", // PATCH instead of PUT to update only the specific key
                body: JSON.stringify({ [key]: newLikes }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
        })
        .then(() => console.log("Likes updated for", key))
        .catch(error => console.error("Error updating likes:", error));
};



