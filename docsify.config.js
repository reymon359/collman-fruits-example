module.exports = {
  main: {
    name: 'Collman fruits example',
    basePath: 'https://raw.githubusercontent.com/reymon359/collman-fruits-example/master/docs/', // To work with GitHub Pages
    repo: 'https://github.com/reymon359/collman-fruits-example/',
    loadSidebar: true,
    alias: {
      '/.*/_sidebar.md': '/_sidebar.md'
    },
    subMaxLevel: 3,
    sidebarDisplayLevel: 1,
    search: 'auto'
  },
}