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
    let json = await fetch("https://github.com/luukfroling/testbook/blob/main/data/data.json");
    let jsondata = await json.json();
    console.log(jsondata);
    sentence.value = "The word you gave is: " + word;
    return [{type: "paragraph", children: [sentence]}];
  },
};

const plugin = {
    name: "My cool plugin",
    directives: [myDirective],
  };
  
export default plugin;