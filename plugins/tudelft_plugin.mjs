const tudelftPlugin = {
    name: "tudelft-style-plugin",
    transform: (tree, vfile) => {
      vfile.data.frontmatter = vfile.data.frontmatter || {};
      vfile.data.frontmatter.extra_head = vfile.data.frontmatter.extra_head || [];
      vfile.data.frontmatter.extra_head.push('<link rel="stylesheet" href="/assets/tudelft_style.css">');
    },
  };
  
  const plugin = {
    name: "TU Delft Style Plugin",
    transforms: [tudelftPlugin],
  };
  
  export default plugin;