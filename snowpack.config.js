/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: { url: '/dist' }
  },
  plugins: [
    [
      "@snowpack/plugin-babel",{
        "input": ['.js', '.jsx', '.ts', '.tsx'], // (optional) specify files for Babel to transform
        transformOptions: {
          "presets": ["@babel/preset-react"]
        }
      },
      '@snowpack/plugin-react-refresh'
    ]
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    { 
      "match": "routes", 
      "src": ".*", 
      "dest": "/index.html"
    },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    
  },
  buildOptions: {
    /* ... */
  },
};
