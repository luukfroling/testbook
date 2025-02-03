const myDirective = {
  name: "mydirective",
  doc: "My new directive!",
  arg: { type: String, doc: "The word to display" },
  run(data, vfile, ctx) {
    const word = data.arg;

    // Returning raw HTML using `type: "html"`
    return [
      {
        type: "html",
        value: `
          <button>
            Click me why is this not working: ${word}
          </button>
        `,
      },
    ];
  },
};

const plugin = {
  name: "My cool plugin",
  directives: [myDirective],
};

export default plugin;
