const myDirective = {
  name: "mydirective",
  doc: "My new directive!",
  arg: { type: String, doc: "The word to display" },
  run(data, vfile, ctx) {
    const word = data.arg;

    // Returning raw HTML using `type: "html"`
    return [
      {
        type: "html",  // This ensures raw HTML is rendered
        value: `Click me <p id="hey"> why </p> is this not working: ${word}`,
      },
    ];
  },
};

const plugin = {
  name: "My cool plugin",
  directives: [myDirective],
};

export default plugin;
