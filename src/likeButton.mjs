// add a directive to the book which generates a like button, which looks like a button and sends a fetch request upon being clicked

const likeButtonDirective = {
    name: "likeButtonDirective",
    doc: "A button that sends a fetch request upon being clicked",
    async run(data, vfile, ctx) {
      console.log("Running likeButton directive with data:", data);
  
      // Create the button element
      const button = {
        type: "html",
        value: `
          <button id="likeButton">👍 Like</button>
          <p id="likeCount">Loading...</p>
          <script>
            async function fetchLikes() {
              try {
                let response = await fetch("https://raw.githubusercontent.com/luukfroling/testbook/main/data/data.json");
                let json = await response.json();
                document.getElementById("likeCount").innerText = "Likes: " + json.likes;
              } catch (error) {
                console.error("Error fetching likes:", error);
              }
            }
          </script>
        `,
      };
  
      return [{ type: "paragraph", children: [button] }];
    },
  };
  
  const likeButtonPlugin = {
    name: "My cool plugin",
    directives: [likeButtonDirective],
  };
  
  export default likeButtonPlugin;


// document.getElementById("likeButton").addEventListener("click", async () => {
//   const response = await fetch("https://api.github.com/repos/luukfroling/testbook/actions/workflows/update-likes.yml/dispatches", {
//     method: "POST",
//     headers: {
//       "Accept": "application/vnd.github.v3+json",
//       "Authorization": "Bearer YOUR_GITHUB_PERSONAL_ACCESS_TOKEN",
//     },
//     body: JSON.stringify({ ref: "main" })
//   });

//   if (response.ok) {
//     alert("Like recorded! Refresh in a few seconds.");
//   } else {
//     alert("Error recording like.");
//   }
// });

// fetchLikes();

// const myDirective = {
//     name: "mydirective",
//     doc: "My new directive!",
//     arg: { type: String, doc: "The word to display" },
//     async run(data, vfile, ctx) {
//       console.log("Running my directive with data:", data);
//       const word = data.arg
//       const sentence = {
//         type: "text",
//         value: "The word you gave is: " + word,
//       };
//       let json = await fetch("https://raw.githubusercontent.com/luukfroling/testbook/main/data/data.json");
//       let jsondata = await json.json();
//       console.log(jsondata['likes']);
  
//       sentence.value = "The word you gave is: " + word;
//       return [{type: "paragraph", children: [sentence]}];
//     },
//   };
  
//   const plugin = {
//       name: "My cool plugin",
//       directives: [myDirective],
//     };
    
//   export default plugin;