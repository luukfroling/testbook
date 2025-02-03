const likeButtonDirective = {
    name: "like-button",  // ✅ Name must match what you call in Markdown
    doc: "A button that sends a fetch request upon being clicked",
    async run(data, vfile, ctx) {
      console.log("Running likeButton directive with data:", data);
  
      return [{
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
  
            async function updateLikes() {
              try {
                const response = await fetch("https://api.github.com/repos/luukfroling/testbook/actions/workflows/update-likes.yml/dispatches", {
                  method: "POST",
                  headers: {
                    "Accept": "application/vnd.github.v3+json",
                    "Authorization": "Bearer YOUR_PERSONAL_ACCESS_TOKEN"
                  },
                  body: JSON.stringify({ ref: "main" })
                });
  
                if (response.ok) {
                  alert("Like recorded! Refresh to see updated count.");
                  fetchLikes();
                } else {
                  alert("Error recording like.");
                }
              } catch (error) {
                console.error("Error updating likes:", error);
              }
            }
  
            document.addEventListener("DOMContentLoaded", function() {
              document.getElementById("likeButton").addEventListener("click", updateLikes);
              fetchLikes();
            });
          </script>
        `,
      }];
    },
  };
  
  const likeButtonPlugin = {
    name: "like-button-plugin",
    directives: [likeButtonDirective],
  };
  
  export default likeButtonPlugin;