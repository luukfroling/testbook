const plugin = {
    name: 'Strong to emphasis',
    transforms: [
      {
        name: 'transform-typography',
        doc: 'An example transform that rewrites bold text as text with emphasis.',
        stage: 'document',
        plugin: (_, utils) => (node) => {
          console.log(utils.select('root', node));
        },
      },
    ],
  };
  
  export default plugin;