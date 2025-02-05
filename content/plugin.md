# My demo page

The like button in the top right only appears after a few seconds due to the way to document is loaded. I do however know how to fix it (~ 1/2 hour probably) but I will do it once decided if this is something we want to keep going with. 

As jupyter next does not yet support js plugins which generate dynamic content as far as I know (and I have tried a lot) we 'inject' the script into the final book during the github actions building process. This is currently set up as a proof of concept and can be polished a bit more if we keep going. 

The js file allows dynamic content to be added to the page by 'agreeing' on a keyword to be replaced. In this case 'Loading...' will be replaced by the amount of likes. This happens after the document is loaded. 

Example: 

Loading...

Keep in mind this is a work in progress, the database is -not- safe which is for now not an issue as we do not save any user information. However anyone can read the source code and rerun the fetch request as many times as they like. This is a proof of concept as I had the db running for a different project. 

