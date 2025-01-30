const myDirective = {
  name: "mydirective",
  doc: "My new directive!",
  arg: { type: String, doc: "The word to display" },
  async run(data, vfile, ctx) {
    console.log("Running my directive with data:", data);
    const word = data.arg
    const sentence = {
      type: "text",
      value: "The word you gave is: " + word,
    };

    //fetch some data 
    const jsondata = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await jsondata.json();
    console.log(json);

    sentence.value = "The word you gave is: " + word + " and the data fetched is: " + JSON.stringify(json);
    return [{type: "paragraph", children: [sentence]}];
  },
};

const plugin = {
    name: "My cool plugin",
    directives: [myDirective],
  };
  
export default plugin;