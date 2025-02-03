const myDirective = {
  name: "mydirective",
  doc: "My new directive!",
  arg: { type: String, doc: "The word to display" },
  run(data, vfile, ctx) {
    const word = data.arg
    const sentence = {
      type: "text",
      value: "The word you gave is: " + word,
      test: "This is a test"
    };
    return [{type: "paragraph", children: [sentence]}];
  },
};

const plugin = {
    name: "My cool plugin",
    directives: [myDirective],
  };
  
export default plugin;