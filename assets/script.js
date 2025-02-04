//find and replace "loading likes ..." with "Likes: 0"
document.addEventListener("DOMContentLoaded", function() {
    
    // set 1 second delay and keep repeating
    let body;
    loadItem(body)

        
  
});

let loadItem = (body) => {
    body = document.body.innerHTML;
    let stringToFind = "Loading...";
    let intermediateString = "Loading .."
    let stringToReplace = "Likes: 0";
    
    //Find string in current page
    if(body.includes(stringToFind)){
        body = body.replace(stringToFind, intermediateString);
        document.body.innerHTML = body;
        console.log("Loading likes ... found");
        return setTimeout(loadItem, 1000);
    } else if(body.includes(intermediateString)){
        console.log("Loading likes ... intermediate found");
        body = body.replace(intermediateString, stringToReplace);
        document.body.innerHTML = body;
        return setTimeout(loadItem, 1000);
    } else {
        console.log("Loading likes ... not found");
        return; 
    }
}




