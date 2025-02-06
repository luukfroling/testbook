const plugin = {
    name: 'retry',
    transforms: [
      {
        name: 'transform-typography',
        doc: 'An example transform that rewrites bold text as text with emphasis.',
        stage: 'document',
        transform: (tree, vfile) => {
            console.log(tree, vfile);
        },
      },
    ],
  };
  
  export default plugin;



// const plugin = {
//     name: 'Strong to emphasis',
//     transforms: [
//       {
//         name: 'transform-typography',
//         doc: 'An example transform that rewrites bold text as text with emphasis.',
//         stage: 'document',
//         plugin: (_, utils) => (node) => {
//             console.log("one below root: "); 
//             console.log(utils.select('root', node).children[0]);
//             console.log("two below root (one below that): ");
//             console.log(utils.select('root', node).children[0].children[0]);

//           //find root and set all text color to red
//         //  utils.select('root', node).children.forEach((child) => {
//         //      if (child.type === 'text') {
//         //          child.value = `<span style="color: red;">${child.value}</span>`;
//             //     }
//             // });
//         },
//       },
//     ],
//   };
  
//   export default plugin;