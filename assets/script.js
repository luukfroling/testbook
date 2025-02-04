//find and replace "loading likes ..." with "Likes: 0"

document.addEventListener("change", function() {
    let stringToFind = "Loading...";
    let stringToReplace = "Likes: 0";
    
    //Find string in current page
    let body = document.body.innerHTML;
    let bodyNew = body.replace(stringToFind, stringToReplace);
    document.body.innerHTML = bodyNew;
    
});




