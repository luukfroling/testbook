const myDirective = {
  name: "mydirective",
  doc: "My new directive!",
  arg: { type: String, doc: "The word to display" },
  run(data, vfile, ctx) {
    const word = data.arg;

    // Returning plain text as a paragraph
    return [
      {
        type: "paragraph",  // Using paragraph type for normal text
        children: [
          {
            type: "text",  // Use text type for normal text
            value: `Click me <b> why </b> is this not working: ${word}`,
          },
        ],
      },
    ];
  },
};

const plugin = {
  name: "My cool plugin",
  directives: [myDirective],
};

export default plugin;
