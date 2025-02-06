const plugin = {
    name: 'retry',
    transforms: [
      {
        name: 'transform-typography',
        doc: 'An example transform that rewrites bold text as text with emphasis.',
        stage: 'post-process',
        plugin: (_, utils) => (node, vfile) => {
            console.log(node, vfile);
            vfile.data.frontmatter = vfile.data.frontmatter || {};
            vfile.data.frontmatter.extra_head = vfile.data.frontmatter.extra_head || [];
            vfile.data.frontmatter.extra_head.push('<link rel="stylesheet" href="/assets/tudelft_style.css">');
            console.log(node, vfile);
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

