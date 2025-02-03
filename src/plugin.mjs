const myDirective = {
  name: "mydirective",
  doc: "My new directive!",
  arg: { type: String, doc: "The word to display" },
  run(data, vfile, ctx) {
    const word = data.arg;
    
    return [
      {
        type: "container",
        kind: "div",
        children: [
          {
            type: "text",
            value: `Click me: ${word}`,
            data: {
              hName: "button", // ✅ Render as a <button>
              hProperties: {
                onclick: "alert('You clicked me!')", // ✅ Add JavaScript event
                style: "padding: 10px; font-size: 16px; cursor: pointer;",
              },
            },
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
