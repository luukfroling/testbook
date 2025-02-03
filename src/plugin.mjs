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
          <button onclick="alert('You clicked me!')" style="padding: 10px; font-size: 16px; cursor: pointer;">
            Click me: ${word}
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
