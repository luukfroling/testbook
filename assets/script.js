/*
* 03/02/2025, Luuk Fröling - like button script
*/

let likes;
let hasLiked;
let path = document.location.pathname.replace(/\//g, "_"); 

//function which runs when doc loaded
document.addEventListener("DOMContentLoaded", function() {
    hasLiked = JSON.parse(localStorage.getItem(`hasLiked_${path}`)) || false; //Check if liked before
    console.log("Has liked:", hasLiked);
    
    let body;
    getLikes(body);
});

let onLike = () => {
    let likeButton = document.getElementById("likeButton");

    likeButton.style.backgroundColor = "#90ee90"; // light green
    likeButton.onclick = () => {};

    likes += 1;
    likeButton.innerHTML = "👍" + likes + " ";
    changeLike(1);

    //3 second cooldown on the like button
    setTimeout(() => { 
        likeButton.onclick = onDislike;
    }, 3000);

    localStorage.setItem(`hasLiked_${path}`, JSON.stringify(true)); //Set local storage for later
}

let onDislike = () => {
    let likeButton = document.getElementById("likeButton");

    likeButton.style.backgroundColor = "#ffffff";   // white
    likeButton.onclick = () => {};

    likes -= 1;
    likeButton.innerHTML = "👍" + likes + " ";
    changeLike(-1);

    //3 second cooldown on the like button
    setTimeout(() => { 
        likeButton.onclick = onLike;
    }, 3000);

    localStorage.setItem(`hasLiked_${path}`, JSON.stringify(false));    //Set local storage again
}



/* because jupyter book next seems to reload the page after loading it the first time,
*   we check again after a second to see if our data is displayed properly.  The strings can be changed, then also change string in md file.
*/

let loadItem = (body, _likes) => {
    likes = _likes;
    body = document.body.innerHTML; //Reload as jupyter book tends to make changes

    //FOR EXAMPLE MIDDLE OF PAGE
    let stringToFind = "Loading...";
    let intermediateString = "Loading.. "
    let stringToReplace = "Likes: " + likes + "<button id='likeButton'>👍 Like</button>";
    
    //Find string in current page
    if(body.includes(stringToFind)){
        document.body.innerHTML = body.replace(stringToFind, intermediateString);
        return setTimeout(() => loadItem(body, likes), 1000);
    } else if(body.includes(intermediateString)){
        document.body.innerHTML = body.replace(intermediateString, stringToReplace);;
        return setTimeout(() => loadItem(body, likes), 1000);                           //END EXAMPLE MIDDLE OF PAGE
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
    const key = path;
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
        body: JSON.stringify({ [path]: 0 }), // Start with 0 likes
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(() =>console.log("Page added to database"))
    .catch(error => console.error("Error initializing like count:", error));
};

let changeLike = (change) => {
    const key = path;
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



